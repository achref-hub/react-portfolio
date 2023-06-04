import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, ProjectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WORK-POINT"
          des=" Development of additional modules that will be integrated into the
          platform Work Point: Consultation and reservation of offices, meeting
          rooms and parking spaces on a real-time web interface using Socket IO.
         validation of leave requests on a web interface"
          src={projectOne}
        />
        <ProjectsCard
          title="Eshriny"
          des=" build an E-commerce application that is used to manage medical
          products."
          src={ProjectFour}
        />
        <ProjectsCard
          title="ELEGANCE"
          des=" implementation of a digital wardrobe that allows to exchange and
          buy clothes and which offers combinations of clothes"
          src={projectThree}
        />
        <ProjectsCard
          title="Nomadz-Mearn"
          des="creation of an application to manage projects and tasks using redux "
          src={projectTwo}
        />
        
      </div>
    </section>
  );
}

export default Projects