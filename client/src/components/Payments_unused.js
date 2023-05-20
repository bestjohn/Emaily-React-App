import React, { Component } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements,PaymentElement } from '@stripe/react-stripe-js';

const stripe = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const options = {
    //clientSecret: "secret",
    mode: 'payment',
    currency: 'usd',
    amount:500
}


const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement/>
            <button>Submit</button>
        </form>
    )
}

const Payments = () => {
    //debugger;
    return (
            <Elements stripe={stripe} options={options} >
            <CheckoutForm />
            </Elements>
    );

}

export default Payments;