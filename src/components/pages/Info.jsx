import React from "react";
import "./pages.css";
import imagse from "../../Assests/[removal.ai]_3a38c511-2c9e-47bf-b5f9-ee7375d0a043-8500_1_05.png";
import { IoIosPaper } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HiMiniChevronDoubleDown } from "react-icons/hi2";

export default function Info() {
  return (
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
  );
}
