import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Mobile = ({mobile}) => {
    const {image, name, price, configuration, _id} = mobile

    
    const history = useHistory();
    const handleOrder = () => {
        history.push(`/mobile/${_id}`);
    }

    return (
        <div className="col-lg-3 col-md-6">
          <Card  className="mt-4">
                <Card.Img variant="top" className="img" src={image} />
                <Card.Body className=" text-center">
                    <Card.Title>{name}</Card.Title>
                   < Card.Text>Configuration : {configuration}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between ">
                    <h5>৳{price}</h5>
                    <Button  variant="success"  onClick={() => handleOrder()}>Buy Now</Button>
                </Card.Footer>
             </Card>
        </div>
    );
};

export default Mobile;