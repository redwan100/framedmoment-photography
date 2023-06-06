
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn } = useContext(AuthContext);
      const from = location.state?.from?.pathname || "/";

  const handleGoogleSingIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      navigate(from, {replace: true})
    });
  };
  return (
    <div>
      {" "}
      <div className="divider">OR</div>
      <div className="w-full text-center">
        <button
          className="btn btn-circle btn-outline "
          onClick={handleGoogleSingIn}
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
