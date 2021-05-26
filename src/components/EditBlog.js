import axios from "axios";
import React,{useState,useEffect} from "react";
import "./styles.css";
import {useHistory,useParams} from "react-router-dom";

const currDate = new Date().toLocaleDateString();
 const currTime = new Date().toLocaleTimeString();

const EditBlog = () =>{
    const [newBlog,setNewBlog]=useState({
        Title : "",
        Body : "",
        Author : ""
    });


    const history = useHistory();
    const {id} = useParams();
    const {Title,Body,Author}=newBlog; //destructure

    useEffect(()=>{
        loadYourBlog();
    },[]);
    
    const handleChange = (event)=>{
    setNewBlog({...newBlog,[event.target.name] : event.target.value})};

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await axios.put("http://localhost:8000/blogs/"+id,newBlog);
        history.push("/"); // redirect  to the home page
    };
    
    const loadYourBlog = async ()=> {
        const result = await axios.get("http://localhost:8000/blogs/"+id);
        setNewBlog(result.data);
    }


return(
<>
<div className="container">
    <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit your Blog</h2>
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
                 value={currDate +", "+ currTime+ " IST"}
                 name="Publish"
                 onChange={handleChange}
                 />
            </div>
            <button className="btn btn-warning">Update Blog</button>
        </form>
    </div>
</div>
</> 
);
};

export default  EditBlog;