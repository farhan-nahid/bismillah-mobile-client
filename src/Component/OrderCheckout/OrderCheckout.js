import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderCheckout = () => {
    
    const {id} = useParams()
  //  console.log(id);
  const[orderCheckout, setOrderCheckout] = useState([]);

    useEffect(()=>{
        const url= `http://localhost:5000/mobileItems/${id}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderCheckout(data))
    },[])
    return (
        <div>
            {
                orderCheckout.map(order => <li>{order.name}</li>)
            }
        </div>
    );
};

export default OrderCheckout;