"use client"
import React from 'react'

const DownloadButton = () => {
  const handleContactClick = () => {
    window.location.href = "https://www.dropbox.com/scl/fi/px4sbvoas4ea1o5g9jsrp/Resume.pdf?rlkey=5svpjtayj9o7ezl3kmtpvqmmq&st=9vg2ergl&dl=0";
  };

  return (
    <button 
      className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-white hover:text-black hover:border-black text-white border border-white mt-3 font-sans'
      onClick={handleContactClick}
    >
      Resume
    </button>
  );
}

export default DownloadButton