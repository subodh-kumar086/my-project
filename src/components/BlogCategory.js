import React,{useState} from 'react';
import {DropdownButton,Dropdown} from "react-bootstrap";


const BlogCatagory = (name,value,onChangle) => {
    const Catagories = [
        {
            id : 1,
            label :"Fashion"
        },
        {
            id : 2,
            label :"Music"
        },
        {
            id : 3,
            label :"LiftStyle"
        },
        {
            id : 4,
            label :"food"
        }
    ]

    const[Catagory,setCatagory]=useState("Select Categories");

    
    return (
        <div>
            <DropdownButton title={Catagory} onChange={event => event.target.value}>
                {
                    Catagories.map((data,key) =>(
                        <Dropdown.Item title={data.label}
                         key={data.id} 
                         name="Catagories"
                         onClick={()=>setCatagory(data.label)}>
                        {data.label}
                        </Dropdown.Item>
                     ) )
                }
                
            </DropdownButton>
                
        </div>
    )
}

export default BlogCatagory
