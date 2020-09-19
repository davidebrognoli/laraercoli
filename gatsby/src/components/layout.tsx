import React from "react"
import Header from "./header"
import '../scss/style.scss';
import ParticlesBg from './particles-bg';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="le-website">
      <Header />
      <div className="le-website__container">
        <main>{children}</main>
        <footer className="le-footer">
          Lara Ercoli - © {new Date().getFullYear()}
        </footer>
        </div>
    </div>
  )
}

export default Layout
