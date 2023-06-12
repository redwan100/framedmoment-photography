import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/ContextProvider";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
const UserInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: userInfo = {}, isLoading } = useQuery({
    queryKey: ["userInformation", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://framedmoments.vercel.app/userInformation/${user?.email}`
      );

      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={userInfo.photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">User Name: {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
          <p>Password: {userInfo?.password || "*****"}</p>
          <div className="card-actions justify-end">
            <Link to={"/"}>
              <button className="btn btn-sm">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
