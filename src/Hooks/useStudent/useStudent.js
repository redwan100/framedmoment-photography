import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],

    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/student/${user?.email}`);

      return res.data;
    },
  });
  return [isStudent, isStudentLoading];
};

export default useStudent;
