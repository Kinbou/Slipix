import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { Adsense } from '@ctrl/react-adsense'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'

import BackgroundImage from '@components/BackgroundImage'

export type BasePageProps = PropsWithChildren<{
  showHeader?: boolean
}>

export const BasePage = ({ children, showHeader = true }: BasePageProps) => {
  const { pathname } = useLocation()

  const TRACKING_ID = 'G-VWTG2C936V'
  ReactGA.initialize(TRACKING_ID)
  ReactGA.send({ hitType: 'pageview', page: pathname, title: pathname })

  return (
    <>
      <BackgroundImage pathname={pathname} />
      {showHeader ? <Header /> : null}
      <ScrollToTop />
      <Adsense
        client="ca-pub-2506772996632451"
        slot=""
        style={{ width: 300, height: 500 }}
        layout="in-article"
        format="fluid"
      />
      {children}
      <Footer />
    </>
  )
}
