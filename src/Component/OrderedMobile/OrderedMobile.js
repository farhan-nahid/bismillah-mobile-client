import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import SingleOrder from '../SingleOrder.js/SingleOrder';

const OrderedMobile = () => {
    const [orderedMobile, setOrderedMobile] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   // console.log(orderedMobile);
    useEffect(()=>{
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderedMobile(data))
    },[])
    return (
        <Container className="mt-5">
            <Row>
                {
                    orderedMobile.map(order => <SingleOrder  order={order}/> )
                }
            </Row>
        </Container>
    );
};

export default OrderedMobile;