"use client"
import React from 'react'

const DownloadButton = () => {
  const handleContactClick = () => {
    window.location.href = "https://www.dropbox.com/scl/fi/tpar128rw7n6exlwh7r3d/Resume.pdf?rlkey=s4ntad0nbltbdhmoen6wvgry2&st=1ylek4nv&dl=0";
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