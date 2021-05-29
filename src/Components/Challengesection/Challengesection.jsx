import React from 'react'
import Testcontainer from '../Testcontainer/Testcontainer'
import './Challengesection.css'


const Challengesection=({ startagain,selectedparagraph,words,characters, wpm,timeremaining, timerstarted,textinfo,oninputchange})=>{

    return(
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-header">
                Take speed test now!
            </h1>
            <Testcontainer selectedparagraph={selectedparagraph} 
            words={words}
            characters={characters}
            wpm={wpm}
            timeremaining={timeremaining}
            timerstarted={timerstarted} 
            textinfo={textinfo}
            oninputchange={oninputchange}
        startagain={ startagain}/>

        </div>
    )
}

export default Challengesection