import React, { useEffect, useContext, useState } from "react"
import { useLocation } from "react-router-dom"

import Header from "@containers/Header"
import Footer from "@components/Footer/Footer";
import ScrollToTop from "@components/ScrollToTop";

import BackgroundImage from "@components/BackgroundImage";

export interface BasePageProps {
  children: React.ReactNode;
  showHeader?: boolean;
}


export const BasePage = ({ children, showHeader = true }: BasePageProps) => {
  const { pathname } = useLocation()

  return (
    <>
      <BackgroundImage pathname={pathname} />
      {showHeader ? (
        <>
          <Header />
        </>
      ) : null}
      <ScrollToTop />
      {children}
      <Footer />
    </>
  )
}
