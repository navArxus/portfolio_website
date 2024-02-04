import React  from 'react'
import { GoArrowUpRight } from "react-icons/go";
import "./Navbar.css"
import {NavLink} from "react-router-dom"

export default function Navbar() {
    const handleButtonClick = () => {
        const gmailId = 'navv5803@gmail.com'; // Replace with your Gmail ID
        const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${gmailId}`;
        window.open(gmailUrl, '_blank');
      };
    return (
        <nav className='nav'>
            <div className="nav-left">
                <p>Nav verma</p>
                <p>Web Devloper</p>
            </div>
            <div className="nav-middle">
                <div className="nav-middle-switch">

                    <div className={`nav-middle-switch-info`}><NavLink to={"/"} className={({ isActive }) => (isActive ? 'active' : '')}>Info</NavLink></div>

                    <div className={`nav-middle-switch-project`}><NavLink to={"/project"} className={({ isActive }) => (isActive ? 'active' : '')}>Project</NavLink></div>
                </div>
            </div>
            <div className="nav-right">
                <button onClick={handleButtonClick} >  navv5803@gmail.com <GoArrowUpRight /></button>
            </div>
        </nav>
    )
}
