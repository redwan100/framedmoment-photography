import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Context/ContextProvider";
import Card from "./Card";
import Loading from "../../../Shared/Loading/Loading";

const MyEnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: enrolledClass = [], isLoading } = useQuery({
    queryKey: ["enrolledClass", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://framedmoments.vercel.app/dashboard/paymentHistory?email=${user?.email}`
      );

      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 x">
      {enrolledClass.length > 0 && Array.isArray(enrolledClass) ? (
        enrolledClass.map((enroll) => <Card key={enroll._id} enroll={enroll} />)
      ) : (
        <p className="text-center text-3xl font-medium my-8">No data found</p>
      )}
    </div>
  );
};

export default MyEnrolledClass;
