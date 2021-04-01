import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import spinner from '../Home/img/loader.gif';
import ManageMobileTable from '../ManageMobileTable/ManageMobileTable';
import SideBar from '../SideBar/SideBar';

const ManageMobile = () => {

    const [mobile, setMobile] = useState([])
  
      useEffect(()=>{
          fetch(`https://bismillah-phone-farhan.herokuapp.com/mobileItems`)
          .then (res => res.json())
          .then(data => setMobile(data))
      },[])

    return (
        <Container>
            <Row className="mt-4">
                <Col md={3} xs={4}>
                    <SideBar />
                </Col>

                <Col md={9} xs={8}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Mobile Name</th>
                                <th>Configuration</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                     </thead>
                        {
                            mobile.length >0 ?  mobile.map(mobile =>  <ManageMobileTable mobile={mobile} />)
                            :<img style={{width:'200px'}} className="text-center" src={spinner} alt="..."/>   
                        }
                </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageMobile;