import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import './AdminPanel.css';



const AdminPanel = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col md={3} xs={4}>
                    <SideBar />
                </Col>

                <Col md={9} xs={8}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;