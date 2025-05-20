import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkedinButton from './LinkedinButton';

// Hero section 
const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold font-sans">
            Hello, I&apos;m 
            Jason Vo
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl items-center font-sans">
            Welcome to my portfolio website
          </p>
          <div> 
            <LinkedinButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
