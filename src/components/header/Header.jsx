import { useState } from 'react'
import './Header.css'

function Header() {

  const [menu, setMenu] = useState(false)

  function handleMenu() {
    setMenu(prev => {
      return !prev
    })

  }

  return (
    <header className='header'>
        <div className="container">
            <div className="header-part">
                <a className='header-logo' href="#">LOGO</a>
                <nav className='header-nav'>
                  <ul>
                      <li><a href="#"><i className="bi bi-person"></i></a></li>
                      <li><a href="#"><i className="bi bi-suit-heart"></i></a></li>
                      <li><a href="#"><i className="bi bi-bag-dash"></i></a></li>
                  </ul>
                  <button className='header__menu--button' onClick={handleMenu}> {menu ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}</button>
                  <ul className="header-list" id={menu ? 'header-list' : ''}>
                    <li><a href="#">постельное белье</a></li>
                    <li><a href="#">одежда для дома</a></li>
                    <li><a href="#">Одежда для улицы</a></li>
                    <li><a href="#">ВЫход</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header