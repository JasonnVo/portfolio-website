import React from 'react'
import Layout from '../layout'
import Navbar from "../components/Navbar";
import AboutSection from '../components/AboutSection';

const page = () => {
  return (
    <section className="relative flex min-h-screen flex-col bg-[#121212] bg-opacity-60">
      <video
        src="/videos/background-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative z-10">
        <Navbar />
        <div className='mb-11'/>
        <AboutSection />
        <div className="container mt-24 mx-auto px-12 py-4">
        </div>
      </div>
    </section>
  )
}

export default page