import React from "react"
import PropTypes from "prop-types"
//import "./layout.css"
import Navbar from "./globals/navbar/Navbar"
import { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
