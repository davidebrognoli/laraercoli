import React from 'react' 
import { Link } from 'gatsby';

interface SiteLink {
  id: string;
  href: string;
  label: string;
}

const Header = () => {
  const links: SiteLink[] = [
    { id: 'home', href: '/', label: 'Lara Ercoli'},
    { id: 'materiale', href: '/materiale', label: 'Materiali'},
    { id: 'temiesame', href: '/temiesame', label: 'Temi esame'},
    { id: 'contatti', href: '/contatti', label: 'Contatti'},
  ]

  return(
    <header className="le-header">
      <nav className="le-header__nav">
        <ul className="le-header__nav-items">
          {links.map(
            (l) => {
              return (
                <li className="le-header__nav-item" key={l.id}>
                  <Link className="le-header__nav-link" to={l.href} activeClassName="le-header__nav-link--active">
                    {l.label}
                  </Link>
                </li>
              )
            }
          )}
        </ul>
      </nav>
    </header>
  )
}


export default Header;