import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Checkout from "./Checkout"
import useCart from "../../../Hooks/useCard/useCard";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import {useQuery} from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../../../Context/ContextProvider";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NENArFajxfwDt2cUMgTxOCanWwKkRCXeofZ0lioPKv1Z4pI63xOyCeoD1xprIq9dn7p0KTKQgv7WhC7U9aTXnAe001CHqWdjO"
);




const Payment = () => {
  const {user, loading} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const [cart, cartRefetch] = useCart();
  const {id} = useParams()
  console.log(id);


    const {
      data: classById = {},
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["allClasses"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axios.get(
          `http://localhost:5000/selectClassById/${id}`
        );
          console.log(res.data);
        return res.data;
      },
    });

  return (
    <div className="w-[25rem] mx-auto text-center block bg-base-200 p-3 shadow-md rounded-md border border-base-300 m-8">

      <Elements stripe={stripePromise}>
        <Checkout  classItem={classById}/>
      </Elements>
    </div>

  )
}

export default Payment