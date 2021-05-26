import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import useLocalStorage from "./useLocalStorage";

const Home = () =>{
    const[search,setSearch]=useLocalStorage("search","");
    const[blogs,setBlog]=useState([]);
    useEffect(()=>{
            loadBlog();
        },[blogs]);
    

const loadBlog = async ()=>{
    // const result = await fetch("http://localhost:8000/blogs");
    // const data = result.json();
    // console.log(data);
    // setBlog(data);
    const result = await axios.get("http://localhost:8000/blogs");
    
    setBlog(result.data.reverse());
};

const handleSearch=(event) => setSearch(event.target.value);
return(
    <div className="container">
        <div class="input-group flex-nowrap m-2">
         <span class="input-group-text">Search</span>
            <input type="text" class="form-control" value={search} onChange={handleSearch}/>
        </div>

        <div className="py-4">
        
        <ul className="list-group">
            
            {
                blogs.map((blog)=>(
                    <li className="list-group-item" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h4>{blog.Title}</h4></Link>
                        <p>Catagories : {blog.Catagories}</p>
                        <p>Written By {blog.Author}</p>
                        <span>Published by {blog.Publish}</span>
                        
                    </li>
                ))
            }
            
  
        </ul>
        </div>
    </div>

);
};

export default  Home;