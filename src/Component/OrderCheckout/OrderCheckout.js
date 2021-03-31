import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderCheckout = () => {
    
    const {id} = useParams()
 // console.log(id);
  const [orderCheckout, setOrderCheckout] = useState([]);
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
    return (
        <Container className="mt-5">
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
                    <td>Mark</td>
                    <td>{price}</td>
                </tr>
            </tbody>
            </Table>
        </Container>
    );
};

export default OrderCheckout;