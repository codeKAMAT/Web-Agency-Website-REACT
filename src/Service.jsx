import React from 'react'
import Card from './Card'
import CardData from './CardData'
const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 col-lg-8 mx-auto'>
            <div className='row gy-4'>
              {CardData.map((value, index) => {
                return (
                  <Card
                    key={index}
                    cardImg={value.imgsrc}
                    cardTitle={value.title}
                    cardSubTitle={value.subTitle}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
