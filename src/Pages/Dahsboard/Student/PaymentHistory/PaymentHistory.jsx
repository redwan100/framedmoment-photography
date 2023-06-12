import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import Row from "./Row";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/ContextProvider";
const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/dashboard/paymentHistory?email=${user?.email}`
      );

      return res.data;
    },
  });

  return (
    <div>
      {paymentHistory.length > 0 && Array.isArray(paymentHistory) ? (
        <>
          <h1 className="text-center text-3xl my-4 sm:text-4xl">
            Transaction Details
          </h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Transaction Id</th>
                    <th>Course Id</th>
                    <th>Payment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, i) => (
                    <Row key={payment._id} payment={payment} i={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-3xl font-medium my-8">No data found</p>
      )}
    </div>
  );
};

export default PaymentHistory;
