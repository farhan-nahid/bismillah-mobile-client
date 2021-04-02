import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleOrder.css';

const SingleOrder = ({order}) => {
    const {image, email, name, date, configuration, _id} = order

    const handleDelete = (id,event) => {
        fetch(`https://bismillah-phone-farhan.herokuapp.com/cancelOrder/${id}`,{
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
        <Col  lg={6}>
            <div className="order">
                <div className="img" >
                    <img  src={image} alt=""/>
                </div>
                <div className="ml-3 details">
                    <h5>Mobile : {name}</h5>
                    <h6>Configuration : {configuration}</h6>
                    <h6>Date : {date}</h6>
                    <h6 className="email">Email : {email}</h6>
                    <span className="bg-danger" onClick={(event)=>handleDelete(_id,event)}>Cancel Order</span>
                </div>
            </div>  
         </Col>
      
    );
};

export default SingleOrder;