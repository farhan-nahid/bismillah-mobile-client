import React from 'react';
import { Col } from 'react-bootstrap';
import cross from './img/cross-removebg-preview.png';
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
        window.alert("Your Order is Canceled")
    }


    return (
        <Col  lg={5}  className="order-details">
            <img src={cross} className="delete float-right " alt="..."  onClick={(event)=>handleDelete(_id,event)} />
            <div className="order">
                <div className="img" >
                    <img  src={image} alt=""/>
                </div>
                <div className="ml-3 details">
                    <h5>Mobile : {name}</h5>
                    <h6>Configuration : {configuration}</h6>
                    <h6>Date : {date}</h6>
                    <h6 className="email">Email : {email}</h6>
                </div>
            </div>  
         </Col>
      
    );
};

export default SingleOrder;