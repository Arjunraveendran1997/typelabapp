import React from 'react'
import './Landing.css'
import bannerimg from './../../Assets/Banner_img.png'
import Typewriter from 'typewriter-effect';

const Landing=()=>{

    return(
        <div className="landing-container">
            <div data-aos="fade-right"className="landing-left">
                <h1 className="landing-header">Can you Type...?</h1>
                  <div className="landing-typewriter">
                  <Typewriter
                     options={{
                         strings: ['Fast?', 'Correct?','Quick?'],
                            autoStart: true,
                                loop: true,
                                 }}
                            />
                  </div>
            </div>
            <div data-aos="fade-left" className="landing-right">
                <img className="banner-image" src={bannerimg} alt="captain-america" />

            </div>
        </div>
    )
}

export default Landing