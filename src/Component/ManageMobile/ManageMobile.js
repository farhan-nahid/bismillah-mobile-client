import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import spinner from '../Home/img/loader.gif';
import ManageMobileTable from '../ManageMobileTable/ManageMobile';
import SideBar from '../SideBar/SideBar';

const ManageMobile = () => {

    const [mobile, setMobile] = useState([])
      console.log(mobile);
  
      useEffect(()=>{
          fetch(`https://bismillah-phone-farhan.herokuapp.com/mobileItems`)
          .then (res => res.json())
          .then(data => setMobile(data))
      },[])

    return (
        <Container>
            <Row className="mt-4">
                <div className="col-md-3">
                    <SideBar />
                </div>

                <div className="col-md-9">
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
                        :<img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt=""/>   
                    }
               </Table>
                </div>
            </Row>
            
        </Container>
    );
};

export default ManageMobile;