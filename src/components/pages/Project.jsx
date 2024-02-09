import React from 'react'
import { motion } from "framer-motion"
import vedio1 from "../../Assests/portfoliowebsitevedio.mp4"
import image2 from "../../Assests/project2.png"
import image3 from "../../Assests/project3.png"
import "./Project.css"
import { FaGithub } from "react-icons/fa6";
export default function Project() {
  return (
    <motion.div
      initial={{
        x: 1200
      }}
      animate={{
        x: 0
      }}
      transition={{
        duration: 0.4,
      }}
      className='project'
    >
      <div className="card">
        <video src={vedio1} autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
        <div className="card-project-detail">
          <h3>OS Desgin Portfolio</h3>
          <p>Excited to share my latest project: a fully interactive portfolio website that mimics an operating system! Every section opens in a window with max, min, and close buttons for a true OS feel.</p>
        </div>
        <div className="card-project-action">
          <a href="https://navarxus.github.io/codenav/" rel="noreferrer" target="_blank" >
            <button>Live Preview</button>
          </a>
          <a href="https://github.com/navArxus/codenav" rel="noreferrer" target="_blank" >
            <FaGithub size={'20px'} />
          </a>
        </div>
      </div>
      <div className="card">
        <img src={image2} alt="" />
        <div className="card-project-detail">
          <h3>Bookmark Handler</h3>
          <p>Bookmark Manager built using React and Google Firebase Firestore. This project showcases my passion for front-end development, user interface design, and efficient data management.</p>
        </div>
        <div className="card-project-action">
          <a href="https://www.linkedin.com/posts/navvermaa_react-firebase-frontenddevelopment-activity-7110549448748904448-oiCF?utm_source=share&utm_medium=member_desktop" rel="noreferrer" target="_blank" >
            <button>LinkedIn Post Preview</button>
          </a>
        </div>
      </div>
      <div className="card">
        <img src={image3} alt="" />
        <div className="card-project-detail">
          <h3>Quix App</h3>
          <p>a dynamic React Quiz App that brings interactive learning to a whole new level  an app that's not only visually appealing but also offers a seamless and engaging quiz-taking journey.</p>
        </div>
        <div className="card-project-action">
          <a href="https://www.linkedin.com/posts/navvermaa_reactapp-webdevelopment-reactprojects-activity-7100827575035281408-o9xB?utm_source=share&utm_medium=member_desktop" rel="noreferrer" target="_blank" >
            <button>LinkedIn Post Preview</button>
          </a>
          <a href="https://github.com/navArxus/ReactQuiz_app" rel="noreferrer" target="_blank" >
            <FaGithub size={'20px'} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
