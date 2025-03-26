import React from 'react'
import ContactUsForm from '../../contactUs/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto'>
      <h1 className='text-4xl font-semibold text-center text-richblack-900'>
        Get in Touch
      </h1>
      <p className='mt-3 text-center text-richblack-500'>
        We'd love to here for you, Please fill out this form.
      </p>
      <div>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection
