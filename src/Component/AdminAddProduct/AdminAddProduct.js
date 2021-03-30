import React from 'react';
import { useForm } from "react-hook-form";

const AdminAddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" ref={register({ required: true })} />
          {errors.name && <span>This field is required</span>}

          <input name="price" ref={register({ required: true })} />
          {errors.price && <span>This field is required</span>}

          <input name="photo" type='file' ref={register({ required: true })} />
          {errors.photo&& <span>This field is required</span>}
          
          <input type="submit" />
        </form>
    );
};

export default AdminAddProduct;