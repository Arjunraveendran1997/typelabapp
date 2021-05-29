import React from 'react'
import './Tryagain.css'

const Tryagain=({words,characters,wpm,startagain})=>{

    return (
        <div className="tryagain-container">
            <h1>Test Results</h1>

            <div className="results-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>WPM:</b> {wpm}
                </p>
            </div>
            <div>
                <button onClick={()=>startagain()} className="end-btn retry-btn">Re-Try</button>
                <button onClick={()=>{
                    window.open("http://www.facebook.com/sharer/sharer.php?u=facebook.com/",
                    "facebook-share-dialogue","width=800","height=600")
                }}
                 className="end-btn fb-share-btn">Share</button>
                 <button onClick={()=>{
                     window.open("http://twitter.com/intent/tweet?text=Arjunravi.com","twitter-share-dialogue","width=800","height=600")
                 }} className="end-btn twitter-share-btn">Tweet</button>
            </div>
        </div>
    )
}

export default Tryagain