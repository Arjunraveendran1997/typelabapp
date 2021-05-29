import React from 'react'
import Tryagain from '../Tryagain/Tryagain'
import Typingchallenge from '../Typingchallenge/Typingchallenge'
import './Testcontainer.css'


const Testcontainer=({ startagain,selectedparagraph,words,characters, wpm,timeremaining, timerstarted,textinfo,oninputchange})=>{


    return(
        <div className="test-container">
          {
            timeremaining >0 ?(
            <div data-aos="fade-up" className="typechallenge-section">
            <Typingchallenge 
            timeremaining={timeremaining}
            timerstarted={timerstarted}
            selectedparagraph={selectedparagraph}
            words={words} 
            characters={characters}
             wpm={wpm}
             textinfo={textinfo}
             oninputchange={oninputchange}/>
          </div>
            ) : (
              <div className="tryagain-container">
              <Tryagain words={words} characters={characters} wpm={wpm} startagain={ startagain}/>
                 </div> 
            )

          }
         
          
          
           
        </div>
    )

}

export default Testcontainer