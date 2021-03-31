import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
      console.log(mobileData)
      fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type':'Application/json'
        },
        body:JSON.stringify(mobileData)
      })
      .then(res=>console.log("server site", res))
    };
    const handleImageUpload = event =>{
      console.log(event.target.files[0]);
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
            <div className="col-md-3">
              <SideBar />
            </div>
       <div className="col-md-9 ">
          <form onSubmit={handleSubmit(onSubmit)} className="submit-area p-5">
            <input name="name" placeholder="Mobile Name" className="name" ref={register} />
            <input name="configuration" placeholder="Configuration" ref={register} /> <br/> <br/>
            <input name="price" placeholder="Mobile Price" type="number" ref={register} />
            <input name="image" className="file"  type='file'  onChange={handleImageUpload}/> <br/> <br/>
            <input type="submit"  className="submit "  />
        </form>
       </div>
       </Row>
       </Container>
    );
};

export default AdminAddMobile;