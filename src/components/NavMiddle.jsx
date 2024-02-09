import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"
const NavMiddle = () => {
    return (
        <div className="nav-middle">
            <div className="nav-middle-switch">

                <div className={`nav-middle-switch-info`}><NavLink to={"/"} className={({ isActive }) => (isActive ? 'active' : '')}>Info</NavLink></div>

                <div className={`nav-middle-switch-project`}><NavLink to={"/project"} className={({ isActive }) => (isActive ? 'active' : '')}>Project</NavLink></div>
            </div>
        </div>
    )
}

export default NavMiddle
