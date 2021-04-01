import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleOrder.css';

const SingleOrder = ({order}) => {
    const {image, email, name, price, configuration} = order
    return (
        <Col  lg={6}>
            <div className="order">
                <div className="img" >
                    <img  src={image} alt=""/>
                </div>
                <div className="ml-3 mt-3">
                    <h4>{name}</h4>
                    <h6>Configuration : {configuration}</h6>
                    <h6>Prize : {price}</h6>
                    <p>Email : {email}</p>
                </div>
            </div>  
         </Col>
      
    );
};

export default SingleOrder;