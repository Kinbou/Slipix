import path from 'path'
import url from 'url'

import mkdirp from 'mkdirp'

import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert'
import HapiAuthJwt2 from 'hapi-auth-jwt2'
import Blipp from 'blipp'
import devErrors from 'hapi-dev-errors'

import config from './config.js'
import connect, { disconnect } from './db/connect.js'
import { validateToken as validate } from './utils/token-utils.js'

import * as routes from './routes/index.js'

mkdirp(config.uploadDir + '/news')

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const {
  port,
  host,
  apiPrefix,
} = config

const init = async () => {
  const server = Hapi.server({
    port,
    host,
    routes: {
      cors: {
        origin: ['https://backoffice.slipix-progresser-sur-league-of-legends.fr'],
        additionalHeaders: ["x-slipix"],
        credentials: true,
      },
      files: {
        relativeTo: path.join(__dirname, '..', 'public'),
      },
    },
  })

  await server.register([
    HapiAuthJwt2,
    Inert,
    {
      plugin: devErrors,
      options: {
        showErrors: process.env.NODE_ENV !== 'production',
      },
    },
    {
      plugin: Blipp,
      options: { showAuth: true },
    },
  ])

  server.auth.strategy('jwt', 'jwt',
    {
      key: config.secret, // Never Share your secret key
      validate, // validate function defined above
    },
  )

  server.auth.default('jwt')

  server.route([
    {
      method: 'GET',
      path: '/ping',
      handler: () => '"pong"',
      options: {
        auth: false,
      },
    },
    ...Object.values(routes)
      .flat()
      .map(route => ({ ...route, path: apiPrefix + route.path })),
    {
      method: 'GET',
      path: '/{filename*}',
      handler: {
        file (req) {
          return req.params.filename
        },
      },
      options: {
        auth: false,
      },
    },
  ])

  const preResponse = function (request, h) {
    const response = request.response
    if (!response.isBoom) {
      return h.continue
    }

    // Replace error with friendly HTML
    if (response.output.payload.message === 'Invalid request payload input') {
      response.output.payload.message = 'Corps de la requête invalide'
    }
    return h.continue
  }

  server.ext('onPreResponse', preResponse)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', async (err) => {
  console.log(err)
  await disconnect()
  process.exit(1)
})

connect()
  .then(() => {
    init()
  })
  .catch(err => {
    console.error(err) // TODO: Log properly
    process.exit(1)
  })
