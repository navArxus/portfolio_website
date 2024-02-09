import React from 'react'
import "./Footer.css"
import { IoIosPaper } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import image from "../Assests/5100_5_02-Photoroom.png-Photoroom.png"
const Footer = () => {
    return (
        <div className='Footer' >
            <div className="Footer-left">
                <img src={image} alt="" />
            </div>
            <div className="Footer-left">
                <p>Nav</p>
                <p>Web Developer</p>
            </div>
            <div className="Footer-right">
                <a href="https://drive.google.com/file/d/1i3AMiHoE6i3I-E1bYWgdvpi37IiRoO2l/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"> <IoIosPaper/>  Resume</a>
                <a href="https://www.linkedin.com/in/navvermaa/"
                    rel="noreferrer"
                    target="_blank"> <FaLinkedinIn/>Linkedin</a>
                <a href="https://github.com/navArxus"
                    rel="noreferrer"
                    target="_blank"><FaGithub/>Github</a>
            </div>
        </div>
    )
}

export default Footer
