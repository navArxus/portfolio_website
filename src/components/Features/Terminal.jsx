import React from 'react'
import "./Terminal.css"
import { FiTerminal } from "react-icons/fi";

const Terminal = () => {
    return (
        <div className='Terminal' >
            <div className="Terminal-header">
                <div className="Terminal-header-1">
                    <p> <i> Terminal</i> </p>
                    <FiTerminal size={"16px"} />
                </div>
            </div>
            <div className="Terminal-body">
                <span>Enter help for all command </span>
                <div className="Terminal-body-input">
                    <p>Nav's @portfolio:~$</p>
                    <input type="text" autoFocus/>
                </div>
            </div>
        </div>
    )
}

export default Terminal
