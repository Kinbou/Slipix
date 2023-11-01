import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'

import BackgroundImage from '@components/BackgroundImage'

export interface BasePageProps {
  children: React.ReactNode
  showHeader?: boolean
}

export const BasePage = ({ children, showHeader = true }: BasePageProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    console.log(
      'basepage page view',
      window.location.pathname + window.location.search,
    )
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [window.location.pathname])

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
