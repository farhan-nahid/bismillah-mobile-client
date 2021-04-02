import React from 'react';
import remove from "./img/delete.png";

const ManageMobileTable = ({mobile}) => {
    const {name, configuration, price,_id} = mobile

    const handleDelete = (id,event) => {
        fetch(`https://bismillah-phone-farhan.herokuapp.com/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                event.target.parentNode.style.display="none"
            }
        })
        window.alert("Successfully Deleted This Product Form Our Database")
    }
    
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{configuration}</td>
                <td>{price}</td>
                 <img style={{width:"25px", height:"25px"}} onClick={(event)=>handleDelete(_id,event)} src={remove} alt=".." /> 
            </tr>
        </tbody>
        
    );
};

export default ManageMobileTable;