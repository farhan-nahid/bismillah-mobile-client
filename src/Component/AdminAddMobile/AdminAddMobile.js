import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';
import './AdminAddMobile.css';

const AdminAddMobile = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
      const mobileData = {
        name:data.name,
        configuration:data.configuration,
        price:data.price,
        image: imageURL
      }
      const url='https://bismillah-phone-farhan.herokuapp.com/adminAddMobile'
      fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type':'Application/json'
        },
        body:JSON.stringify(mobileData)
      })
      .then(res=>console.log("server site", res))
      window.alert("New Product Added In Our Database Successfully")
    };


    const handleImageUpload = event =>{
      const imageData = new FormData();
      imageData.set('key', 'dbe52342656cdfcd177dc7e9307e81c4');
      imageData.append('image', event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    
    return (
      <Container>
        <Row className="mt-4"> 
            <Col md={3} xs={4}>
              <SideBar />
            </Col>
            <Col md={9} xs={8}>
                <form onSubmit={handleSubmit(onSubmit)} className="submit-area p-5">
                    <div className="input d-flex  justify-content-between">
                      <input name="name" placeholder="Mobile Name" className="form-control" ref={register} />
                      <input name="configuration" placeholder="Configuration"  className="form-control"  ref={register} /> 
                    </div>

                    <div className="input d-flex mt-4">
                        <input name="price" placeholder="Mobile Price" className="form-control" type="number" ref={register} />
                        <input name="image" type='file' className="form-control" onChange={handleImageUpload}/>      
                      </div>
                  <input type="submit" value="save"  className="submit float-right"  />
              </form>
            </Col>
         </Row>
      </Container>
    );
};

export default AdminAddMobile;