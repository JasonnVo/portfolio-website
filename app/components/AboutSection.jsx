"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton'

// data table containing unordered list of skills 
const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='font-sans list-disc pl-2'>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='font-sans'>
        <li>University of Massachusetts Amherst</li>
        <li className='font-style: italic text-sm text-[#ADB7BE]'>Bachelor of Science in Computer Science</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.png" width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='font-bold text-4xl text-white mb-4 font-sans'>About Me</h2>
          <p className='text-base font-sans'>
          I am currently a senior at the University of Massachusetts Amherst working towards a B.S degree in Computer Science. 
          I have a strong passion for web development and aspire to become a full stack software engineer. 
          My plan is to graduate in spring semester 2025.
          </p>
          <div className='flex flex-row mt-8'>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
              {" "}
              Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          </div>
          <div className='mt-2'>{tab_data.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection