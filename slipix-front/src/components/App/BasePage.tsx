import React, { useEffect, useContext, useState } from "react"
import { useLocation } from "react-router-dom"

import Header from "@containers/Header"
import Footer from "@components/Footer/Footer";
import ScrollToTop from "@components/ScrollToTop";
import { CurrentPathContext } from "@/context/AppContext";

import BackgroundImage from "@components/BackgroundImage";

export interface BasePageProps {
  children: React.ReactNode;
  showHeader?: boolean;
}


export const BasePage = ({ children, showHeader = true }: BasePageProps) => {
  const { pathname } = useLocation()
  const [test, setTest] = useState(pathname)

  console.log('useLocation',  pathname)
  useEffect(() => {
    setTest(pathname)
  }, [pathname])
  return (
    <>
      <BackgroundImage pathname={pathname} />
      {showHeader ? (
        <>
          <Header />
        </>
      ) : null}
      <ScrollToTop />
      <CurrentPathContext.Provider value={test}>
      {children}
      </CurrentPathContext.Provider>
      <Footer />
    </>
  )
}
