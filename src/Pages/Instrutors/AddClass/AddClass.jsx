import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/ContextProvider';
import { useForm } from 'react-hook-form';

const AddClass = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="">
    

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full mx-auto border border-slate-400/20  border-gradient">
          <h1 className="text-center text-4xl font-bold uppercase mb-4">
            Class inoformation
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
              {/* <small className="text-red-500">
                {errors.name && <span>Please type your name </span>}
              </small> */}
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
                {...register("email", { required: true })}
              />
              {/* <small className="text-red-500">
                {errors.email && <span>Please type your email</span>}
              </small> */}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Available Seats
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="seats"
                type="seats"
                placeholder="Enter your seats"
                {...register("seats", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                })}
                {...register("seats", { required: true })}
              />

              
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="password"
                placeholder="Confirm password"
                {...register("price", { required: true })}
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
                {...register("photoUrl", { required: true })}
              />
            </div>
            
            <div className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Add class
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddClass