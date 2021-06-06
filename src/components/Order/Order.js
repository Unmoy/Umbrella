import React, { useEffect, useState } from 'react';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import './Order.css'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
const Order = () => {
    const { id } = useParams();
    const [shipmentData, setShipmentData] = useState(null)
    const allProduct = useSelector((state) => {
        return state.productList;
    });
    const singleProduct = allProduct.find(pd => pd.id == id)
    console.log(singleProduct);
    const { Title } = singleProduct

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = formData => {
        setShipmentData(formData);
    };
    const handlePaymentSuccessful = (paymentId, card) => {
        const orderDetails = {
            product: singleProduct.title,
            shipment: shipmentData,
            paymentId,
            card,
            orderTime: new Date()
        }
    }


    return (
        <section className='OrderContainer' style={{ width: '99%' }}>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mt-5 pt-5'>
                    <form className='w-50' onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control mb-3' name='name'  {...register("name", { required: true })} placeholder='Enter Your name' />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='form-control mb-3' name='email'  {...register("email", { required: true })} placeholder='Enter Your email' />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className='form-control mb-3' name='title' defaultValue={Title} {...register("title", { required: true })} placeholder='Product Name' />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                </div>
                <div className='col-md-6 mt-5 pt-4'>
                    <PaymentProcess handlePayment={handlePaymentSuccessful}></PaymentProcess>
                </div>
            </div>

        </section>
    );
};

export default Order;