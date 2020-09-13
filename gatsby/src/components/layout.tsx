import React from "react"
import Header from "./header"
import '../scss/style.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="le-website">
      <div className="le-website__container">
        <Header />
        <main>{children}</main>
        <footer className="le-footer">
          Lara Ercoli - © {new Date().getFullYear()}
        </footer>
        </div>
    </div>
  )
}

export default Layout
