import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Java-Script"
            subTitle="(02/2022 - 08/2022)"
            result="X-POINT - El Gazala technology center"
            des="Development of additional modules that will be integrated into the
            platform Work Point: Consultation and reservation of offices, meeting
            rooms and parking spaces on a real-time web interface using Socket IO."
          />
          <ResumeCard
            title="Full Stack Type-Script Developer"
            subTitle="(06/2021 - 08/2021)"
            result="Wind Consulting - Mahdia/Tunisia"
            des="Develop a web application to automate the process recruitment within
            the company Wind Consulting which supports appointment
            management, offer management of jobs, the search for candidates, the
            consultation of the list of CVs and conducting an online interview."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="(06/2020 - 08/2020)"
            result="Tunisie Télécom - Mahdia/Tunisia"
            des="Learn to use and master HTML5, CSS3."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">Personal Projects</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Full Stack Java-Script Developer"
            subTitle="(02/2023 - 03/2023)"
            result="Freelance Project"
            des="build an E-commerce application that is used to manage medical
            products."
          />
           <ResumeCard
            title="Full Stack Java-Script Developer"
            subTitle="(02/2021 - 07/2021)"
            result="Academic Project"
            des="implementation of a digital wardrobe that allows to exchange and
            buy clothes and which offers combinations of clothes."
          />
          <ResumeCard
            title="Full Stack Type-Script Developer"
            subTitle="(05/2020 - 07/2020)"
            result="Academic Project"
            des="develop an application to facilitate the reservation of cars at the
            airport."
          />
       
    
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
