import { loadStripe } from "@stripe/stripe-js";

const STRIPE_API_KEY = process.env.STRIPE_API_KEY || 'pk_test_yIHwedm3UKBavN4uRagJmdet00rn37gaWb';

let stripe;

export const init = () =>
  stripe
    ? stripe
    : loadStripe(STRIPE_API_KEY).then((s) => {
        stripe = s;
        return stripe;
      });
