import React from 'react';
import { EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const ContactSection = () => {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold font-sans text-white mt-4 mb-8 md:mb-8'>
        Contact
      </h2>
      <div className='flex flex-col justify-center items-center space-y-2'> {/* Flexbox container with column direction */}
        <div className='flex items-center space-x-4'>
          <EnvelopeIcon className='h-10 w-10 text-white' />
          <p className='text-2xl font-sans text-white'>
            Jason54423@gmail
          </p>
        </div>
        <div className='flex items-center space-x-4'>
          <UserCircleIcon className='h-10 w-10 text-white' />
          <p className='text-2xl font-sans text-white'>
            <a href="https://www.linkedin.com/in/jasonvo-cs/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/jasonvo-cs/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
