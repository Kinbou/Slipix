import { useState } from 'react'
import classNames from 'classnames'
import { Route, useLocation, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
// @ts-ignore
import Analytics from 'react-router-ga'
// import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

// // == Import
import dataImages from '@/utils/dataImages.json'
import { useResolution } from '@/utils/selectors'

import Alert from '@containers/Alert/index'

import ScrollToTopButton from '@components/ScrollToTopButton'
import { AppRoutes } from "@/components/App/AppRoutes";

const apiBaseUrl: string = typeof import.meta.env.VITE_API_BASE_URL === 'string' ? import.meta.env.VITE_API_BASE_URL : ''

const App = ({ showAlert }: any) => {
//  })
  const [imgLoaded, setImgLoaded] = useState(true)

  // const cacheImages = async (srcArray: any) => {
  //   const images = [...srcArray]
  //   const promises = images.map((src) => new Promise<void>((resolve, reject) => {
  //     const img = new Image()
  //     img.src = src
  //     img.onload = resolve()
  //     img.onerror = reject()
  //   }))
  //   await Promise.all(promises)
  //   setImgLoaded(true)
  // }
  // useEffect(() => {
  // const format = useResolution()
  // const imagesCopy = { ...dataImages[appClass] }
  // const images = [...imagesCopy.otherImage]
  // images.push(imagesCopy.background[format])
  // cacheImages(images)
  // }, [appClass])

  return (
    <div className="app">
      <main>
            <AnimatePresence>
            {/* @ts-ignore */}
            <ScrollToTopButton /> 
            {showAlert && <Alert />}
              <AppRoutes />
            </AnimatePresence>
          {/* <Analytics id="UA-176591379-1" debug> */}
          {/* </Analytics> */}
      </main>
    </div>
  )
}

export default App
