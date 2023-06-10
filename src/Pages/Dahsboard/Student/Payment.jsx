import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from "./Checkout"
import useCart from "../../../Hooks/useCard/useCard";


const stripePromise = loadStripe(
  "pk_test_51NENArFajxfwDt2cUMgTxOCanWwKkRCXeofZ0lioPKv1Z4pI63xOyCeoD1xprIq9dn7p0KTKQgv7WhC7U9aTXnAe001CHqWdjO"
);




const Payment = () => {
  const [cart, cartRefetch] = useCart();
  const price = cart.reduce((acc, cur) => {
    acc += cur.price;
    cartRefetch()
    return acc;
  }, 0);

  return (
    <div className="w-[25rem] mx-auto text-center block bg-base-200 p-3 shadow-md rounded-md border border-base-300 m-8">

      <Elements stripe={stripePromise}>
        <Checkout price={price} cart={cart}/>
      </Elements>
    </div>

  )
}

export default Payment