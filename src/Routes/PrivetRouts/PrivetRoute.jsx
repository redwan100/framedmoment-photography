import  { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/sign-in"} state={{ from: location }} replace />;
};

export default PrivetRoute;
