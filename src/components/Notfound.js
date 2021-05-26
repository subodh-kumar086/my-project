import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

const Notfound = () =>{
return(
<div className="notfound">
    <h1>;( Not found</h1>
    <Link to="/">Go to Home Page</Link>
</div>
);
};

export default  Notfound;