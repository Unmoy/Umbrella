import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardFrom from './SplitCardFrom/SplitCardFrom';
import './PaymentProcess.css'
const stripePromise = loadStripe('pk_test_51IzGaLAGMxkvING41asW5lWniH57S2MIQowxIaLUIvKxT851OK6CwCF094DuDUZRbsczTlGg6HX9ahUWqhdPuJrr00tUqBYf1x');
const PaymentProcess = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <div className=' d-flex justify-content-center '>
                    <div className='cardContainer p-5'>
                    <SplitCardFrom handlePayment={handlePayment}></SplitCardFrom>
                    </div>
                </div>
            </Elements>
        </div>
    );
};

export default PaymentProcess;