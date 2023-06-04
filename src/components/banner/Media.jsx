import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiAngular, SiMongodb, SiNodedotjs } from "react-icons/si";
import { Link } from 'react-router-dom';
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" onClick={()=> {window.location.href = `https://www.facebook.com/achh.reef`}}>
              <FaFacebookF />
            </span>
            <span className="bannerIcon" onClick={()=> {window.location.href = `https://github.com/achref-hub`}}>
              <FaGithub />
            </span>
            <span className="bannerIcon" onClick={()=> {window.location.href = `https://linkedin.com/in/achref-aguel-b155771a9/`}}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media