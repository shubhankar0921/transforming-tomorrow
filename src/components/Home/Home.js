import React from 'react'
import { Link } from 'react-router-dom'
import "./home_style.css"

export default function Home() {

  return (
    <div>
      <div className="header">
        <div className="quote">
          <h1> " Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."  </h1>
          
          
        </div>

      </div>

      <div className="content_div" id='first'>
        <div className="image" id="first_image"></div>
        <div className="content">Create Your Own Community And Work For A Cause</div>
      </div>
      <div className="content_div" >
        <div className="content">Grow Your Community</div>
        <div className="image" id="second_image"></div>
      </div>
      <div className="content_div">
        <div className="image" id="third_image"></div>
        <div className="content">Organise Campaigns And <b>Transform Tomorrow</b></div>
      </div>

      
    </div>
  )
}
