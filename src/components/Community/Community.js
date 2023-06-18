import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { db } from '../../config'
import "./community_style.css"
import { useNavigate } from "react-router-dom";



export default function Community() {
    const navigate = useNavigate();
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"community")
    let authenticated = localStorage.getItem("Authenticated")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="find">
            {list.map((post) =>{
                return <div className="post_blog">
                    <h2>{post.name}</h2>
                    <p>Causes Of Work : {post.causes}</p>
                    {authenticated?
                    <button className="ask" onClick={()=>{
                        localStorage.setItem("description",post.description)
                        localStorage.setItem("community_name",post.name)
                        localStorage.setItem("community_founder",post.founder)
                        localStorage.setItem("community_cause",post.causes)
                        localStorage.setItem("community_link",post.link)
                        navigate("/community-description");
                        window.location.reload()
                    }}>MORE</button>
                    :
                    <button className="ask" onClick={()=>{
                        navigate("/profile");
                        window.location.reload()
                    }}>MORE</button>
                }
                </div>
            })}
            <Link to="/add-community" className="add_teacher">START COMMUNITY</Link>
        </div>
    )
}