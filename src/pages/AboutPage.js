import React from 'react'
import { PageHero } from '../components'
import toko from '../assets/hero-bcg.jpeg'
import './aboutpage.css'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <section>
        <div className='hero'>
          <div className='div-img'>
            <img src={toko} alt='nice desk' className='img'/>
          </div>
          <article className='div-article'>
            <div className='title'>
              <h2 className='h2-title'>Our Story</h2>
              <div className=''></div>
            </div>
            <p className='p-article'>
            Berawal dari kebiasaan bandingin harga antar toko, lahirlah Cek Toko Sebelah di 1998. Hingga sekarang telah berkembang melayani 300 Kota di indonesia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. 
            </p>
          </article>
        </div>
        
      </section>
    </main>
  )
}

export default AboutPage
