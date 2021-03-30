import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Mobile = ({product}) => {
    const {img, name, price} = product
    return (
        <div className="col-lg-3 col-md-6">
          <Card  className="mt-4 single-events">
                <Card.Img variant="top" className="img" src={img} />
                <Card.Body className="name text-center">
                    <Card.Title >{name}</Card.Title>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between ">
                    <h3>{price}</h3>
                    <Button  variant="success">Buy Now</Button>
                </Card.Footer>
             </Card>
        </div>
    );
};

export default Mobile;