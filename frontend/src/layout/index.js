import React, { Component } from 'react'
import Menu from '../compenents/navigation'
import Rightside from '../compenents/rightside'
import Footer from '../compenents/footer'
//The main layout that appears on all pages
const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className="w3-row">
        <div className="w3-col   w3-margin-top">
          {children}
        </div>
        {/* <Rightside /> */}
      </div>
      <Footer />
    </>
  );

}

export default Layout