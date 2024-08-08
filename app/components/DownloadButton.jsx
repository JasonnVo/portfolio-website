"use client"
import React from 'react'

const DownloadButton = () => {
  const handleContactClick = () => {
    window.location.href = "https://www.dropbox.com/scl/fi/cjchxxdtfzia0s8pkzow8/Resume.pdf?rlkey=dcv1f9qi6al52awi3clto4ka0&st=m9eiflhv&dl=0";
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