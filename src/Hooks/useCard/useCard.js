import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  // const token = localStorage.getItem('access-token');

  const {
    data: cart = [],
    refetch: cartRefetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-select-class", user?.email],

    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/allSelectedCourse?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [cart, cartRefetch, isLoading];
};

export default useCart;
