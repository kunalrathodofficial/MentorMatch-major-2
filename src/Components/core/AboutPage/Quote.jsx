import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=' text-sm md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-black'>
      We are passionate about revolutionizing the way we learn.
      <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>"Combine Mentors and Mentees</span>
      <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
        {" "}
        {/* expertise */}
      </span>
      , and community to create an 
      <span  className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
      {" "}
        unparalleled educational experience.
      </span>
    </div>
  )
}

export default Quote
