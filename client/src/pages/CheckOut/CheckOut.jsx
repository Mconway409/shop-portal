/* eslint-disable no-console */
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm';
import Container from '@material-ui/core/Container';

const key =
  'pk_test_51IepmaGcqzgnUMuWJHzjsXvj1fnEI7U0w5MjsbkIMjy1Gr0775QvtDEhYTI69I1brszgs5oBNo8ktibUUsHtVWUV005FOIoYMK';

const promise = loadStripe(key);

const CheckOut = () => {
  return (
    <Container>
      <div>Form to buy HERE</div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
};

export default CheckOut;
