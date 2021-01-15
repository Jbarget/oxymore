import allowedCountries from "../constants/stripe-allowed-countries";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);

type SetErrorType = (errorMessage: string) => void;

const redirectToCheckout = (
  setError: SetErrorType,
  redirectUrl: string
) => async () => {
  try {
    const urlWhenDone = `${process.env.REACT_APP_BASE_URL}${redirectUrl}`;
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    if (!stripe) {
      return null;
    }

    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: `${process.env.REACT_APP_STRIPE_MAGAZINE_PRICE_ID}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: urlWhenDone,
      cancelUrl: urlWhenDone,
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
