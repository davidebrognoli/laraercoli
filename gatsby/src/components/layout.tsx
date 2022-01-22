import React from "react"
import Header from "./header"
import "../scss/style.scss"
import Iubenda from "react-iubenda-policy"
import { Link } from "gatsby"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  const myPolicyId = "13872407"

  return (
    <div className="le-website">
      <Header />
      <div className="le-website__container">
        <main>{children}</main>
        <footer className="le-footer">
          Lara Ercoli - © {new Date().getFullYear()} -
          <div className="le-footer__privacy">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
