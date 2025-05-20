"use client"
import React from 'react'

const DownloadButton = () => {
  const handleContactClick = () => {
    window.location.href = "https://www.dropbox.com/scl/fi/xu3wrx6a3jhbuf8ioom0l/Resume.pdf?rlkey=6j05xj9h1p5jgdyr2pcmizf3w&st=g3lvxxlu&dl=0";
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