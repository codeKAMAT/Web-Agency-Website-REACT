import React from 'react'
import HomeAndAboutHead from './HomeAndAboutHead'
import about from '../src/images/about.png'

const About = () => {
  return (
    <>
      <HomeAndAboutHead
        headtitle={'About'}
        headtitle2={'Us'}
        headSubTitle={
          'As a leading digital marketing agency in Delhi & Gurgaon, We Provide Website Design, SEO Optimization & Full-Service Digital Marketing'
        }
        headButton={'Connect Now'}
        headButtonLink={'/contact'}
        headImg={about}
      />
    </>
  )
}

export default About
