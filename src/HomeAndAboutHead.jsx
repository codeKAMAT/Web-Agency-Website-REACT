import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeAndAboutHead = ({
  headtitle,
  headtitle2,
  headSubTitle,
  headButton,
  headButtonLink,
  headImg,
}) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>
                    {headtitle}
                    <strong className='brand-name'> {headtitle2}</strong>
                  </h1>
                  <h2 className='my-3'>{headSubTitle}</h2>
                  <div className='mt-3'>
                    <NavLink to={headButtonLink} className='btn-get-started'>
                      {headButton}
                    </NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img
                    src={headImg}
                    alt='homeimg'
                    className='img-fluid animated'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAndAboutHead
