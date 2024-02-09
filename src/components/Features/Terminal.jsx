import React, { useState } from 'react'
import "./Terminal.css"
import { FiTerminal } from "react-icons/fi";
import portfolioCommands from "./command"

const Terminal = () => {
    const [usercommand, setusercommand] = useState('')
    const [commands, setCommands] = useState([])
    const commandExecute = () => {
        const comquery = {
            command: usercommand,
            result: portfolioCommands[usercommand] || `Command "${usercommand}" not found.`
        }
        setCommands([...commands, comquery])
        setusercommand('')
    }
    const UpdateHandler = (e) => {
        setusercommand(e.target.value);
    }
    const terminalInputHandler = (e) => {
        if (e.key === "Enter") {
            commandExecute()
        }
    }

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
                {commands.map(cmd => {
                    return (
                        <div key={cmd.result} className="Command">
                            <p>Nav's @portfolio:~$ {cmd.command} <br /> {cmd.result} </p>
                        </div>
                    )
                })}
                <div className="Terminal-body-input">
                    <p>Nav's @portfolio:~$</p>
                    <input type="text" onChange={UpdateHandler} value={usercommand} onKeyDown={terminalInputHandler} />
                </div>
            </div>
        </div>
    )
}

export default Terminal
