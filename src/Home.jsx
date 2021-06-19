import React from 'react'
import HomeandAboutHead from './HomeAndAboutHead'
import home from '../src/images/home.png'

const Home = () => {
  return (
    <>
      <HomeandAboutHead
        headtitle={'Grow Your Buisness with'}
        headtitle2={'Our Web Agency'}
        headSubTitle={'We are team of talented developers.'}
        headButton={'Get Started'}
        headButtonLink={'/service'}
        headImg={home}
      />
    </>
  )
}

export default Home
