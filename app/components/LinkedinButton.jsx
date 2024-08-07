"use client"
import React from 'react'

const LinkedinButton = () => {
  const handleContactClick = () => {
    window.location.href = "https://www.linkedin.com/in/jasonvo-cs/";
  };

  return (
    <button 
      className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-white hover:text-black hover:border-black text-white border border-white mt-3 font-sans'
      onClick={handleContactClick}
    >
      Linkedin
    </button>
  );
}

export default LinkedinButton