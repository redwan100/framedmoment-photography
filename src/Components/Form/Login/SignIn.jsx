import Lottie from "lottie-react";
import signInImg from "../../../assets/FormImg/signIn.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Pages/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/ContextProvider";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignIn = () => {
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false)
    const { userSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

       const {
         register,
         handleSubmit,
         formState: { errors },
       } = useForm();

       const onSubmit = (data) => {
        userSignIn(data.email, data.password)
          .then((result) => {
            const user = result.user;
            toast.success("Successfully Login", {
              duration: 2000,
              position: "top-center",
            });
            navigate(from, { replace: true });
          })
          .catch((err) => setError(err.message));
       };


  return (
    <div>
      <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-200px)]">
        <div className="-z-10 max-w-sm mx-auto md:max-w-full">
          <Lottie animationData={signInImg} loop={true} />
        </div>

        <div className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full mx-auto border border-slate-400/20 border-gradient">
          <h1 className="text-center text-4xl font-bold uppercase mb-4">
            Sign in
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-base-300"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />

              <small className="text-red-500">
                {errors.email && <span>Please type your email</span>}
              </small>
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline relative bg-base-300"
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />

                <span
                  className="absolute top-3 right-4 cursor-pointer opacity-60"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>

              <small className="text-red-500">
                {errors.email && <span>Please type your password</span>}
              </small>
            </div>
            <div className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <small className="pt-3 block">
              Dont have an account?{" "}
              <Link
                to="/sign-up"
                className="text-blue-500 font-medium hover:underline"
              >
                Sign up
              </Link>
            </small>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
