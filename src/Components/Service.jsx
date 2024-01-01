import React from 'react'
import img1 from '../img/google-ads.svg'
import img2 from '../img/yandex-direct.svg'
import img3 from '../img/seo-icon.svg'
import img4 from '../img/web.svg'
import Fade from 'react-reveal/Fade';

export default function Service() {
  return (
    <section className='serviceSection' id='loyiha'>
      <div className="container">
        <h2 className='serviceTitle'>02 <span>мои услуги</span></h2>
        <div className='row '>
            <Fade>
              <div className="scard col-12 col-md-6 col-lg-3">

              <div className='serviceCard'>
                <img src={img1} alt="" />
                  <h2>Реклама в Google Ads</h2>
                  
                  <p>Выведем ваш сайт в ТОП-3 в поисковике Google за 1 день. Мы 100% гарантируем, что эффективность продаж вашего бизнеса увеличится с 40% до 70%</p>
                </div>
              </div>
            </Fade>

            <Fade>

          <div className="scard col-12 col-md-6 col-lg-3">
            <div className='serviceCard'>
              <img src={img2} alt="" />

                <h2>Реклама в Яндекс Директ</h2>
                <p>Выведем ваш сайт в ТОП-3 в поисковике Яндекс  за 1 день. Мы 100% гарантируем, что эффективность продаж вашего бизнеса увеличится с 40% до 70%</p>
              </div>
            </div>
            </Fade>

          <Fade>

            <div className="scard col-12 col-md-6 col-lg-3">
              <div className='serviceCard'>
              <img src={img3} alt="" />

              <h2>SEO </h2>
              <p>SEO  повышает рейтинг вашего сайта в поисковых системах без какой-либо рекламы, хорошее решение для эффективности вашего бизнеса</p>
            </div>
          </div>
          </Fade>

          <Fade>

            <div className="scard col-12 col-md-6 col-lg-3">
              <div className='serviceCard'>
              <img src={img4} alt="" />

              <h2>Разработка сайтов</h2>
              <p>Мы подготовим любой тип веб-сайтов для вашего бизнеса с высоким качеством и неповторимым дизайном.</p>
            </div>
          </div>
          </Fade>

        </div>
      </div>
    </section>
  )
}
