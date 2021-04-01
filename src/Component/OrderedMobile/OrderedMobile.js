import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import spinner from '../Home/img/loader.gif';
import SingleOrder from '../SingleOrder/SingleOrder';

const OrderedMobile = () => {
    const [orderedMobile, setOrderedMobile] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(()=>{
        fetch('https://bismillah-phone-farhan.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrderedMobile(data))
    },[])
    return (
        <Container className="mt-5">
            <Row>
                {
                    orderedMobile.length > 0 ? orderedMobile.map(order => <SingleOrder  order={order}/> )
                    :<img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt="..."/>                
                }    
            </Row>
        </Container>
    );
};

export default OrderedMobile;