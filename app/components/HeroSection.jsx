import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './DownloadButton';
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
            <DownloadButton />
            <LinkedinButton />
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-16 lg:mt-0'>
          <div className="rounded-full bg-[#191919] w-[250px] h-[250px] relative bg-opacity-45">
            <Image
              src="/images/memoji.png"
              alt="A Memoji representation of Jason Vo"
              className='absolute transform -translate-x-1/2 -translate-y-[190px] top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
