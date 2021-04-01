import { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './OrderCheckout.css';

const OrderCheckout = () => {
    
    const {id} = useParams()
  
 // console.log(id);
  const [orderCheckout, setOrderCheckout] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
 // console.log(orderCheckout);
  const {name, price} =orderCheckout;
  
//  console.log(name, price);
  
    useEffect(()=>{
        const url= `https://bismillah-phone-farhan.herokuapp.com/mobile/${id}`
     //   console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderCheckout(data))
    },[id])

    const handleOrderCheckout = () => {
        const newOrder = {...loggedInUser, ...orderCheckout}
        delete newOrder._id
        console.log(newOrder);
        fetch('https://bismillah-phone-farhan.herokuapp.com/orderCheckout', {
            method : 'POST',
            headers:{ 
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <Container className="mt-5">
            <div className="order-checkout">
            <h3 className="mb-4">Order Checkout</h3>
            <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Mobile Name</th>
                    <th>Quantity</th>
                    <th>Prize</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td> 1 </td>
                    <td>{price}</td>
                </tr>
            </tbody>
            </Table>
            <Button  variant="success"  className=" mt-4 justify-content-center" onClick ={handleOrderCheckout}>Checkout</Button>
            </div>
        </Container>
    );
};

export default OrderCheckout;