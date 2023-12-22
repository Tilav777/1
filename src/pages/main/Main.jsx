import './Main.css'
import { useState } from 'react'

function Main() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [productCount, setProductCount] = useState(1)
  const galery = ['../../../public/photo1.avif', '../../../public/photo2.avif', '../../../public/photo3.jpeg']

  function handleImage(index) {
    console.log(index);
    setActiveIndex(index)
  }

  function plusProduct() {
    setProductCount(prev => {
      return prev + 1
    })
  }

  function minusProduct() {
    setProductCount(prev => {
      if(prev > 1) {
        return prev - 1
      }else {
        return prev
      }
    })
  }


  return (
    <main className='main'>
      <div className="container">
        <div className="main-page">
          <div className='main-page__images'>
            {
              galery?.map((image, i) => {
                return <img className={activeIndex == i ? 'active-image' : ''} key={i} src={image} alt="foto" onClick={() => handleImage(i)} />
              })
            }
          </div>
          <div className='main-page__datas'>
            <div className='product-degree'>
              <p>Пижама для девочек</p>
              <span>Арт. 02765/46</span>
              <p>Отзывы <span><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></span> 14 отзывов <span><i className="bi bi-chevron-right"></i></span></p>
            </div>
            <div className='product-price'>
              <p>800 ₽ <span>1 500 ₽</span> <span><i className="bi bi-chevron-right"></i></span></p>
              <div>
                <a href="#">скидка -47%</a>
                <a href="#">акция -20%</a>   
              </div>         
            </div>
            <div className='product-size'>
              <select name="" id="">
                <option value="">Выбрать размер</option>
                <option value="">XL</option>
                <option value="">L</option>
              </select>
              <p>Определить размер</p>
            </div>
            <div className='product-count'>
              <div>
                <div>
                  <button className='product-count__item' onClick={plusProduct}>+</button>
                  <p className='product-count__item'>{productCount}</p>
                  <button className='product-count__item' onClick={minusProduct}>-</button>
                </div>
                <div>
                  <button>Добавить в корзину</button>
                  <button><i className="bi bi-suit-heart"></i></button>
                </div>
              </div>
              <p>Купить в <span>{productCount}</span> клик</p>
            </div>
            <hr />
            <ul>
              <li><i className="bi bi-person-square"></i> Lorem, ipsum dolor.</li>
              <li><i className="bi bi-clock"></i> Lorem, ipsum.</li>
              <li><i className="bi bi-credit-card-2-back-fill"></i> Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main