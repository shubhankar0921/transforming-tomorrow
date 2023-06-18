import React from 'react'
import "./CommunityDescription.css"

export default function CommunityDescription() {
    let description = localStorage.getItem("description")
    let community_name = localStorage.getItem("community_name")
    let community_cause = localStorage.getItem("community_cause")
    let community_link = localStorage.getItem("community_link")
    setTimeout(() => {
        localStorage.removeItem("description")
        localStorage.removeItem("community_name")
        localStorage.removeItem("community_location")
        localStorage.removeItem("community_link")
    }, 1000);
  return (
    <div className='description_div'>
        <h1 className="name">{community_name}</h1>
        <h2 className="location">Causes for which we work :{community_cause}</h2>
        <p className="description">{description}</p>
        
        <a className='link' target="_blank" href={community_link}>JOIN OUR COMMUNITY</a>
    </div>
  )
}


