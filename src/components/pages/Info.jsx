import React from 'react'
import "./pages.css"
import imagse from "../../Assests/8500_1_06-Photoroom.png-Photoroom.png"
export default function Info() {
  return (
    <div className='info-page' >
        <img src={imagse} alt="" width={"20%"} />
        <div className="info-page-content">
            <p>A web developer</p>
            <h1></h1>
        </div>
    </div>
  )
}
