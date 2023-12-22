import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-part">
          <div className='footer-part__menu'>
            <ul>
              <li>покупателям</li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">Акции</a></li>
              <li><a href="#">Бренды</a></li>
            </ul>
            <ul>
              <li>о нас</li>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Команда</a></li>
            </ul>
          </div>
          <div className="footer-part__search">
            <p>Узнайте первыми о новинках и акциях</p>
            <div>
              <input type="search"  placeholder='Адрес электронной почты'/>
              <button type='search'>Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer