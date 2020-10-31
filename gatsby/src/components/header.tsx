import React, { useState } from 'react' 
import { Link } from 'gatsby';
import classNames from 'classnames'

interface SiteLink {
  id: string;
  href: string;
  label: string;
}

const Header = () => {
  const [open, setOpen] = useState(false)

  const links: SiteLink[] = [
    { id: 'home', href: '/', label: 'Lara Ercoli'},
    { id: 'materiale', href: '/materiale', label: 'Materiali'},
    { id: 'temiesame', href: '/temiesame', label: 'Temi esame'},
    { id: 'contatti', href: '/contatti', label: 'Contatti'},
    { id: 'avvisi', href: '/avvisi', label: 'Avvisi'},
  ]

  const click = () => {
    setOpen(!open)
  }

  const burgerClass = classNames('le-header__burger', {
    'le-header__burger--open': open
  })

  const menuClass = classNames('le-header__menu', {
    'le-header__menu--open': open
  })

  return(
    <header className="le-header">
      <div className="le-header__container">
        <button className={burgerClass} onClick={click}>
          <span className="le-header__burger-bar"></span>
          <span className="le-header__burger-bar"></span>
          <span className="le-header__burger-bar"></span>
        </button>
        <nav className={menuClass}>
          <ul className="le-header__menu-items">
            {links.map(
              (l) => {
                return (
                  <li className="le-header__menu-item" key={l.id}>
                    <Link className="le-header__menu-link" to={l.href} activeClassName="le-header__menu-link--active">
                      {l.label}
                    </Link>
                  </li>
                )
              }
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}


export default Header;