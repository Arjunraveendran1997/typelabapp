import React from 'react'
import './Challengedetailcard.css'

const Challengedetailcard=({cardname,cardvalue})=>{


    return(
        <div className="detailscard-container">
            <div className="card-name">{cardname}</div>
            <div className="card-value">{cardvalue}</div>
        </div>
    )
}

export default Challengedetailcard