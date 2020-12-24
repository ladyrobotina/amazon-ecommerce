import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elemnts = useElements();

    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);

    const [clientScecret, setClientSecret] = useState(true);

    const handleSubmit = async (event) => {
        // do all the fancy stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientScecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }) .then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    useEffect(() => {
       // generate the special stripe secret which allow us to charge a custmer
       const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripes expects the total in a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) *100}`
            });
            setClientSecret(reponse.data.clientScecret)
       }
       getClientSecret();
    }, [baskett])

    const handleChange = event => {
        // listen for change in the CardElement
        // and play any errors as the costumer types their card details
        setDisable(event.empty);
        setError(event.error ? event.error.message:"");
    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout (<Link to="/checkout">{basket?.lenght} items</Link>)</h1>
                {/* Payment section - delivery adress */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Cordoba, Argentina</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className='payment_priceContainer'>
                                    <CurrencyFormat renderText={(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                {/* Error */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
