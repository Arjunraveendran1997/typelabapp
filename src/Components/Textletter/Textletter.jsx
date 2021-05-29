import React from 'react'
import './Textletter.css'

const Textletter=({individualletterinfo})=>{
   
   
    const statusclass={
        correct:"correct",
        incorrect:"incorrect",
        notattemted:"notattemted",
    }[individualletterinfo.status]



   
    return (
        <span className={`text-letter  ${statusclass}`}>{individualletterinfo.textletter}</span>

    )

}

export default Textletter