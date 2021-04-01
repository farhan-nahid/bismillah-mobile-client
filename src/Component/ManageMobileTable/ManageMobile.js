import React from 'react';
import remove from "./img/delete.png";

const ManageMobile = ({mobile}) => {
    const {name, configuration, price,_id} = mobile

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log("delete done", data);
        })
    }
    
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{configuration}</td>
                <td>{price}</td>
                <td> <img  style={{width:"25px", height:"25px"}} onClick={()=>handleDelete(_id)} src={remove} alt=".." /> </td>
            </tr>
        </tbody>
        
    );
};

export default ManageMobile;