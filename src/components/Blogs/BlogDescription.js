import React from 'react'
import "./Blogdescription_style.css"
import ReactMarkdown from 'react-markdown'


export default function BlogDescription() {
    let description = localStorage.getItem("description")
    let campaign_name = localStorage.getItem("campaign_name")
    let campaign_author = localStorage.getItem("campaign_author")
    setTimeout(() => {
        localStorage.removeItem("description")
        localStorage.removeItem("campaign_name")
        localStorage.removeItem("campaign_author")
        localStorage.removeItem("campaign_photo_url")
    }, 1000);
  return (
    <div className='description_div'>
        <h1 className="name">{campaign_name}</h1>
        <h2 className="location">{campaign_author}</h2>
        <p className="description"><ReactMarkdown>{description}</ReactMarkdown></p>
        
    </div>
  )
}
