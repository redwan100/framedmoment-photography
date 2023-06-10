import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";

const Checkout = ({ price, cart }) => {
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axios
        .post(`http://localhost:5000/create-payment-intent`, { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCardError("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        className:cart.map((name) => name.className),
        transactionId: paymentIntent.id,
        classId:cart.map((item) => item.course_id),
        date: new Date(),
        price,
        quantity: cart.length,

        status: "pending",
      };

      axios.post("http://localhost:5000/payments", payment).then((res) => {
        if (res.data.result.insertedId) {
            console.log(res.data);
        }

      });
    }

    navigate("/dashboard/my-select-class");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-xs bg-slate-600 text-white mt-3 w-full"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {cardError && <p className="text-error">{cardError}</p>}
    </form>
  );
};

export default Checkout;
