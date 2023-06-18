import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import { useNavigate } from "react-router-dom";
import "./add_community_style.css"


export default function AddCommunity() {
    const navigate = useNavigate();

    const [causes, setcauses] = useState("")
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [link, setlink] = useState("")
    const [founder, setfounder] = useState("")
    

    const email = localStorage.getItem("email")
    const owner_mail = localStorage.getItem("owner_mail")
    const authenticated = localStorage.getItem("Authenticated")
    

    const Login_redirect = () => {
        navigate("/profile")
        window.location.reload()
    }

    const collection_ref = collection(db,"community")
    const Sumbit =  async() =>{
        if (causes !=="" & name !== "" & description!=="" & link!=="" ) {
            await addDoc(collection_ref, { causes, name, description,link, email})
            navigate("/community")
            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Organise A Campaign!</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Name of Community : </h5>
                            <input className="input_form" type="text" placeholder="Name" onChange={(event)=>{setName(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Causes For Which We Work : </h5>
                            <input className="input_form" type="text" placeholder=""  onChange={(event)=>{setcauses(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5"> Link To Join Community : </h5>
                            <input className="input_form" type="text" placeholder="Your website , discord, anything"  onChange={(event)=>{setlink(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5"> Founder Of Community : </h5>
                            <input className="input_form" type="text" placeholder="Founder Name"  onChange={(event)=>{setfounder(event.target.value)}} />
                        </label>
                        <label id="start-location-label">
                            <h5 className="input_label" id="Location-label-h5">Description : </h5>
                            <textarea name="" id="textarea" cols="30" rows="10" onChange={(event)=>{setdescription(event.target.value)}}></textarea>
                        </label>      
                </div>
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}