import Lottie from "lottie-react";
import signUpImg from '../../../assets/FormImg/signUp'
import {Link, useNavigate} from 'react-router-dom'
import SocialLogin from "../../../Pages/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/ContextProvider";


const SignUp = () => {
   const [error, setError] = useState("");
   const { createUser, updateUserProfile } = useContext(AuthContext);

   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
     console.log(data);
     createUser(data.email, data.password)
       .then((result) => {
         const loggedUser = result.user;

         updateUserProfile(data.name, data.photoUrl)
           .then(() => {   })
           .catch((err) => setError(err));
       })
       .catch((err) => setError(err));
   };
  return (
    <>
      <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-200px)]">
        <div className="-z-10 max-w-sm mx-auto md:max-w-full">
          <Lottie animationData={signUpImg} loop={true} />
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full mx-auto border border-slate-400/20  border-gradient">
          <h1 className="text-center text-4xl font-bold uppercase mb-4">
            Sign up
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <small className="text-red-500">
                {errors.name && <span>Please type your name </span>}
              </small>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true ,},)}
              />
              <small className="text-red-500">
                {errors.email && <span>Please type your email</span>}
              </small>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                })}
                {...register("password", { required: true })}
              />

              <small className="text-red-500">
                {errors.password && (
                  <span>Please type your password at least 6 character</span>
                )}
              </small>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm-password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Confirm password"
                {...register("confirm-password", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                PhotoUrl
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="photo"
                placeholder="Photo Url"
              />
            </div>
            {error && <p className="text-error font-medium">{error}</p>}
            <div className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Register
              </button>
            </div>
            <small className="pt-3 block">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-blue-500 font-medium hover:underline"
              >
                Login
              </Link>
            </small>
          </form>
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default SignUp;
