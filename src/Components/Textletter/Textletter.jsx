import React from 'react'
import './Textletter.css'

const Textletter=({individualletterinfo})=>{
   
   
    const statusclass={
        correct:"correct",
        incorrect:"incorrect",
        notattemted:"notattemted",
    }[individualletterinfo.status]



   
    return (
        <div>
        <span className={`text-letter ${statusclass}`}>
            {individualletterinfo.textletter}
          
             </span>
      
        </div>
    )

}

export default Textletter