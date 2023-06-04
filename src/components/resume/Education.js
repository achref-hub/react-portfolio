import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in technical science"
            subTitle="(2017-2018)"
            result="Mahdia, Tunisia"
            des=""
          />
          <ResumeCard
            title="university education"
            subTitle="IPEIM - Preparatory institute for engineering
            studies in Monastir (2017 - 2019)"
            result="Monastir, Tunisia"
            des="graduated from the national entrance exam to engineering schools"
          />
          <ResumeCard
            title="university education"
            subTitle="ESPRIT (Ecoles Sup Privée d’Ingénierie et de
              Technologies) (2019 - 2022)"
            result="Ariena, Tunisia"
            des="Computer Engineering (Web Specialty: Web Technologies And From the Internet)"
          />
        </div>
      </div>
     
    </motion.div>
  );
}

export default Education