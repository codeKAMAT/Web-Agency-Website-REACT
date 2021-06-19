import React, { useState } from 'react'
import contact from './images/contact.svg'
const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: '',
  })

  const InputEvent = (event) => {
    const { name, value } = event.target
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    alert(`Thank You for submitting the form:\n 
    Your name : ${data.fullname}\n
    Your phone number : ${data.phone} \n
    Your email : ${data.email}\n
    Your message :\n ${data.message} `)
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div id='contact' className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <img src={contact} alt='homeimg' className='img-fluid animated' />
          </div>
          <div className='col-md-5 col-10 order-1 order-lg-2 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Full Name
                </label>
                <input
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent}
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Phone
                </label>
                <input
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent}
                  type='tel'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Mobile Number'
                  required
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='yourmail@example.com'
                  required
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlTextarea1' className='form-label'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={data.message}
                  onChange={InputEvent}
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <div className='col-12'>
                <button className='btn-get-started' type='submit'>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
