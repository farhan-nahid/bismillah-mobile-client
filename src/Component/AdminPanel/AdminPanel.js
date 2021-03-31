import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import './AdminPanel.css';



const AdminPanel = () => {
    return (
        <Container>
            <Row className="mt-4">
                <div className="col-md-3">
                    <SideBar />
                </div>

                <div className="col-md-9">
                    
                </div>
            </Row>
        </Container>
    );
};

export default AdminPanel;