import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from '../Dashboard/CheckoutForm'

const stripePromise = loadStripe('pk_test_51L0bHqBqGGr0Fo7RYZArm0gxQiaQHYZqcXnNmcEvVDndyz0tWRSjve16uDZrRos4j5Ta5863L3w9IWJjLMRJmxG600eM27PV3H');

const Payment = () => {
    const { id } = useParams();
    const url = `https://still-meadow-05809.herokuapp.com/booking/${id}`

    const { data: appoinment, isLoading } = useQuery(["booking", id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {appoinment.patient}</p>
                    <h2 class="card-title">Pay for {appoinment.treatment}</h2>
                    <p>Your Appoinment   <span className='text-orange-700'>{appoinment.date}</span> </p>
                    <p>Please pay: ${appoinment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appoinment={appoinment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;