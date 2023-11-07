import React, { PropsWithChildren, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

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
      {children}
      <Footer />
    </>
  )
}
