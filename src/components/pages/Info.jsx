import React from "react";
import "./pages.css";
import imagse from "../../Assests/[removal.ai]_3a38c511-2c9e-47bf-b5f9-ee7375d0a043-8500_1_05.png";
import { IoIosPaper } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HiMiniChevronDoubleDown } from "react-icons/hi2";
import Reveal from "./Reveal";
import { FaHtml5, FaCss3, FaPython, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

// Frammer motion imports 
import { motion } from "framer-motion";
import Terminal from "../Features/Terminal";

export default function Info() {


  return (
    <motion.div
      initial={{
        x: 1200
      }}
      animate={{
        x: 0
      }}
      exit={{
        x: 1200
      }}
      transition={{
        duration: 0.4,
      }}
      className="info"
    >
      <div className="info-page">

        <img src={imagse} alt="" width={"20%"} />
        <div className="info-page-content">
          <p>A web developer</p>
          <h1>Who's obsessed with user experience</h1>
          <h1>Who can turn your ideas into reality</h1>
          <div className="info-page-icon">
            <a
              href="https://drive.google.com/file/d/1i3AMiHoE6i3I-E1bYWgdvpi37IiRoO2l/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <IoIosPaper />
                <p>Resume</p>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/navvermaa/"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <FaLinkedinIn />
                <p>LinkdeIN</p>
              </span>
            </a>
            <a
              href="https://github.com/navArxus"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <FaGithub />
                <p>GitHub</p>
              </span>
            </a>
          </div>
        </div>
        <small className="arrow">
          <HiMiniChevronDoubleDown size={"30px"} />
        </small>
      </div>
      <div className="info-about">
        <div className="info-about-data">
          <Reveal>
            <motion.h1>About Me :</motion.h1>
          </Reveal>
          <Reveal>
            <p>My name is Nav, and I am a passionate individual on a journey to become a full-stack developer. With a <b>foundational position as a React intern</b>, I improved my abilities in front-end technologies, including HTML, CSS, JavaScript, and React. My skill does not end there; I also have a great understanding of back-end basics, including Python, Git, GitHub, and Firebase. I am currently increasing my skill set by focusing on Node.js and Express.js, exhibiting my commitment to learning full-stack development.</p>
          </Reveal>
          <Reveal>
            <p>As a quick learner, I can readily adapt to new technologies and changes in the development landscape. My ability to successfully collaborate with clients and translate their thoughts into useful and aesthetically pleasing digital solutions distinguishes me. My portfolio demonstrates a combination of creativity and technical expertise, demonstrating my ability to face issues straight on and generate solutions that exceed expectations. Join me on this fascinating adventure as I continue to learn and improve in the ever-changing field of web development.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="info-skill">
          <div className="info-skill-left">
            <FaHtml5 size={"20vh"} />
            <FaCss3 size={"20vh"} />
            <IoLogoJavascript size={"20vh"} />
            <FaReact size={"20vh"} />
            <FaNode size={"20vh"} />
            <FaPython size={"20vh"} />
            <FaGithub size={"20vh"} />
            <IoLogoFirebase size={"20vh"} />
            <SiRedux size={"20vh"} />
          </div>
          <div className="info-skill-right">
            <h2>Skills</h2>
            <p>I am proficient in front-end technologies, including HTML, CSS, JavaScript, React, and Redux, crafting responsive and dynamic user interfaces. <br /><br /> On the back-end, my skills extend to Node, Python, and Firebase, complemented by expertise in version control with Git and GitHub.</p>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="info-terminal">
          <Terminal/>
        </div>
      </Reveal>


    </motion.div>
  );
}
