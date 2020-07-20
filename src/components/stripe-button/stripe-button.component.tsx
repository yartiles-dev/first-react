import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const key = 'pk_test_51H75hEBSjQbKjTw5YtHgUS8BNZIX2zMICKo1ygOX3NaZMAGqbveHjdEdTXR7aaVyuZRiNTNpNfyuwQPEqeTeVFnz0084keJtaQ'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={key}
        />
    )
}

export default StripeCheckoutButton