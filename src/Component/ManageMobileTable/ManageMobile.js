import React from 'react';
import remove from "./img/delete.png";

const ManageMobile = ({mobile}) => {
    const {name, configuration, price,_id} = mobile

    const handleDelete = (id,event) => {
        console.log(event.target.parentNode);
        fetch(`https://bismillah-phone-farhan.herokuapp.com/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                event.target.parentNode.style.display="none"
            }
        })
    }
    
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{configuration}</td>
                <td>{price}</td>
                 <img  style={{width:"25px", height:"25px"}} onClick={(event)=>handleDelete(_id,event)} src={remove} alt=".." /> 
            </tr>
        </tbody>
        
    );
};

export default ManageMobile;