import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Mobile from '../Mobile/Mobile';
import './Home.css';
import spinner from './img/loader.gif';

const Home = () => {

    const [mobiles, setMobiles] = useState([])
  //  console.log(mobiles);

    useEffect(()=>{
        fetch(`http://localhost:5000/mobileItems`)
        .then (res => res.json())
        .then(data => setMobiles(data))
    },[])

    return (
        <Container>
            <div class="text-center search-field mt-5 mb-5 d-flex">
                <input  type="text" className="form-control" placeholder="Search for SmartPhone" />
                <button  class="btn btn-success">Search</button>
            </div>
            <Row>
                {
                    mobiles.length >0 ?mobiles.map(mobile  => <Mobile key={mobile._id}  mobile={mobile} />) 
                    :<img className="text-center m-auto" style={{width:'30%'}} src={spinner} alt=""/>   
                }
            </Row>
        </Container>
    );
};

export default Home;

