import React from 'react'
import Challengedetailcard from '../Challengedetailcard/Challengedetailcard'
import Typingbox from '../Typingbox/Typingbox'
import './Typingchallenge.css'

const Typingchallenge=({selectedparagraph,words,characters, wpm,timeremaining, timerstarted,textinfo,oninputchange})=>{


    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                <Challengedetailcard cardname="Words" cardvalue={words}/>
                <Challengedetailcard cardname="Characters" cardvalue={characters}/>
                <Challengedetailcard cardname="Speed" cardvalue={wpm}/>
            </div>
            <div className="typewriter-container">
                <Typingbox 
                timeremaining={timeremaining}
                timerstarted={timerstarted}
               
                textinfo={textinfo} 
                oninputchange={oninputchange}/>
                
            </div>
            
            
        </div>
    )
}

export default Typingchallenge