import React from 'react'
import Textletter from '../Textletter/Textletter'
import './Typingbox.css'

const Typingbox=({timerstarted,timeremaining,textinfo,oninputchange })=>{

    return (
        <div className="typing-container">
            <div className="timer-container">
                <p className="timer">
                    00:
                {timeremaining >= 10 ? timeremaining : `0${timeremaining}`}
                </p>
                <p className="timer-info">
                    {!timerstarted && "Start typing here..."}
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                <div className="textarea text-paragraph">
                
                {textinfo.map((individualletterinfo,index)=>(
                    
                     <Textletter
                    key={index}
                    individualletterinfo={individualletterinfo} 
                    return
                    />
                            
                ))}


                
                </div>
                </div>
                <div className="textarea-right">
                 <textarea 
                 onChange={(e)=>oninputchange(e.target.value)}
                 className="textarea"
                 placeholder="Start typing here"
                 ></textarea>
                </div>
            </div>
        </div>
    )
}

export default Typingbox