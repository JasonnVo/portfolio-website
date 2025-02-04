import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"

const ProjectCard = ({ imgURL, title, description, gitURL, previewURL}) => {
  return (
    <div> {/* image */}
      <div className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{ background: `url(${imgURL})`, backgroundSize: "cover"}}> 
        {/* overlay */}
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl'>
          <Link href={previewURL} className=' items-center h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
          <Link href={gitURL} className=' items-center h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
        </div>
      </div>
      {/* description */}
      <div className='text-white rounded-b-xl bg-[#121212] py-6 px-4 mb-8 font-sans'>
        <h5 className='text-xl font-semibold mb-2 font-sans'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard