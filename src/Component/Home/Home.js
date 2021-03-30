import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Mobile from '../Mobile/Mobile';
import './Home.css';

const Home = () => {

    const products = [
        {
            name: 'Child Support',
            img: 'https://i.ibb.co/Z8NWSTW/stuffed-Animals.png',
            price:"111"
        },
        {
            name: 'Animal Shelter',
            img: 'https://i.ibb.co/YX0WJ3K/study-Group.png',
            price:"111"
        },
        {
            name: 'Bird House',
            img: 'https://i.ibb.co/dLqpwpz/school-Suffiles.png',
            price:"111"
        },
        {
            name: 'Good Student',
            img: 'https://i.ibb.co/Qjqj1q1/river-Clean.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/GR0cXtV/refuse-Shelter.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/vvRMXND/newBooks.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/Nrj839G/music-Lessons.png',
            price:"111"
        },
         {
            name: 'Good Student',
            img: 'https://i.ibb.co/Qjqj1q1/river-Clean.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/GR0cXtV/refuse-Shelter.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/vvRMXND/newBooks.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/Nrj839G/music-Lessons.png',
            price:"111"
        },
        {
            name: 'Food Charity',
            img: 'https://i.ibb.co/ky13rkD/ITHelp.png',
            price:"111"
        }
    ]




    return (
        <Container>
            <div class="text-center search-field mt-5 mb-5 d-flex">
                <input  type="text" className="form-control" placeholder="Search for SmartPhone" />
                <button  class="btn btn-success">Search</button>
            </div>
            <Row>
                {
                    products.map(product  => <Mobile product={product} />)
                }
            </Row>
        </Container>
    );
};

export default Home;