import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ cardImg, cardTitle, cardSubTitle }) => {
  return (
    <>
      <div id='serviceCard' className='col-md-4 col-10 mx-auto '>
        <div className='card '>
          <img src={cardImg} className='card-img-top' alt={cardTitle} />
          <div className='card-body'>
            <h5 className='card-title fw-bold'>{cardTitle}</h5>
            <p className='card-text'>{cardSubTitle}</p>
            <NavLink to='#' className='btn-get-started'>
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
