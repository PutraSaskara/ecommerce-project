import React from 'react'
import { services } from '../utils/constants'
import './services.css'

const Services = () => {
  return (
<section>
      <div className="section-center">
        <article>
          <h3>
            Produkt Custom
            <br />
            Sesuai Keinginan Kamu
          </h3>
        </article>
        <div className="services-center">
          {services &&
            services.map((servicesProd) => {
              return (
                <article className="service">
                  <span>{servicesProd.icon}</span>
                  <h4>{servicesProd.title}</h4>
                  <p>{servicesProd.text}</p>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  )
}

export default Services
