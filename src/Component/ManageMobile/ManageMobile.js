import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const ManageMobile = () => {
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
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </Row>
            
        </Container>
    );
};

export default ManageMobile;