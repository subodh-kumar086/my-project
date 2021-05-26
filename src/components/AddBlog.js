import axios from "axios";
import React,{useState} from "react";
import "./styles.css";
import {useHistory} from "react-router-dom";
import BlogCatagory from "./BlogCategory";

//  const currDate = new Date().toLocaleDateString();
//  const currTime = new Date().toLocaleTimeString();

const AddBlog = () =>{
    const [newBlog,setNewBlog]=useState({
        Title : "",
        Catagories : "",
        Body : "",
        Author : "",
        Publish: ""
    });

   
    
    const history = useHistory();
    const {Title,Catagories,Body,Author,Publish}=newBlog; //destructure
    
    const handleChange = (event)=>{
        setNewBlog({...newBlog,[event.target.name] : event.target.value})};

const handleSubmit = async (event)=>{
    event.preventDefault();
    await axios.post("http://localhost:8000/blogs",newBlog);
    history.push("/"); // redirect  to the home page

    };



return(
<>
<div className="container">
    <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add your Blog</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" 
                className="form-control form-control-lg" 
                placeholder="Title of the Blog" 
                name="Title"
                value={Title}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <BlogCatagory name="Catagories" value={Catagories} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <textarea className="form-control"
                 placeholder="Write Blog here...." 
                 name="Body"
                 value={Body}
                 onChange={handleChange}
                 ></textarea>
                
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Name of the Author" 
                 value={Author}
                 name="Author"
                 onChange={handleChange}
                 />
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Published by" 
                 value={Publish}
                 name="Publish"
                 onChange={handleChange}
                 />
            </div>
            
            
            <button className="btn btn-primary">Add Blog</button>
        </form>
    </div>
</div>



</> 
);
};

export default  AddBlog;