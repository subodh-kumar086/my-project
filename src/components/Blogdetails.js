import axios from "axios";
import React,{useState,useEffect} from "react";
import {useParams,Link} from "react-router-dom";




const Blogdetails = () =>{
    const [newBlog,setNewBlog]=useState({
        Title : "",
        Body : "",
        Author : "",
        Catagories : ""
    });
    
    const {id} = useParams();
    // const loadYourBlog = async ()=> {
    //     const result = await axios.get("http://localhost:8000/blogs/"+id);
    //     setNewBlog(result.data);
    // };

    const deleteBlog = async (id) => {
        await axios.delete("http://localhost:8000/blogs/"+id);
        //loadYourBlog();
    };


    useEffect(()=>{
        const loadYourBlog = async ()=> {
            const result = await axios.get("http://localhost:8000/blogs/"+id);
            setNewBlog(result.data);
        };
        loadYourBlog();
    },[]);


return(
    <div className="container">
        
        <h1 className="display-4">Blog : {id} </h1>  
        <hr/>
        <ul className="list-group">
            <li className="list-group-item"><p className="">{newBlog.Title}</p></li>
            <li className="list-group-item"><p className="">Catagories : {newBlog.Catagories}</p></li>
            <li className="list-group-item">Written by {newBlog.Author}</li>
            <li className="list-group-item"><p className="blogBody">{newBlog.Body}</p>
            
            </li>
            <li className="list-group-item">Published  by {newBlog.Publish}</li>
        </ul>
        <br/><br/>
        <Link className="btn btn-primary m-2" to ="/">Back to Home</Link>
        <Link className="btn btn-danger m-2" to ="/" onClick={()=>deleteBlog(newBlog.id)}>Delete</Link>
        <Link className="btn btn-warning" to ={`/EditBlog/${newBlog.id}`} >Edit your Blog</Link>
    </div>
);
};

export default  Blogdetails;