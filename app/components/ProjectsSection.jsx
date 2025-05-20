import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Portfolio website built using Javascript, React, next.js, Tailwind CSS, and Node.js",
    image: "/images/projects/portfolio-website.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/JasonnVo/portfolio-website",
    previewURL: "/"
  },
  {
    id: 2,
    title: "Course Chronicle",
    description: "Full stack project created with a development team that utilizes next.js, typescript, CSS, node.js, and mySQL for the database. Created as a calendar and a to-do list app with CRUD functionality for creating and deleting events.",
    image: "/images/projects/course-chronicle.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/maxtispro/CS320-Team-V-Cool",
    previewURL: "https://imgur.com/a/Ni1DCgg"
  },
  {
    id: 3,
    title: "Spoti-gen",
    description: "Full stack single paged web application that uses the spotify API to grab new album releases and generates the user a random list of songs. Developed using Javascript, HTML, CSS, Node.js, Express.js, and mongoDB as database storage.",
    image: "/images/projects/spoti-gen.png",
    tag: ["All", "Web"],
    gitURL: "https://github.com/JasonnVo/Spoti-Gen",
    previewURL: "https://imgur.com/a/yztzUdf"
  },
];



const ProjectsSection = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold font-sans text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgURL={project.image} gitURL={project.gitURL} previewURL={project.previewURL}/>)}
      </div>
    </>
  )
}

export default ProjectsSection