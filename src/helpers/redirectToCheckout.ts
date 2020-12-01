import { loadStripe } from "@stripe/stripe-js";
import allowedCountries from "../constants/stripe-allowed-countries";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

const successUrl = `${process.env.REACT_APP_BASE_URL}/oxymore`;
const cancelUrl = `${process.env.REACT_APP_BASE_URL}/oxymore`;

type SetErrorType = (errorMessage: string) => void;

const redirectToCheckout = (setError: SetErrorType) => async () => {
  try {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    if (!stripe) {
      return null;
    }

    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: `${process.env.REACT_APP_STRIPE_PRICE_ID}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl,
      cancelUrl,
      shippingAddressCollection: {
        allowedCountries,
      },
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  } catch (error) {
    setError(error.message);
  }
};

export default redirectToCheckout;
