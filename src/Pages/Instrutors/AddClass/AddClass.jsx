import { useContext } from "react";
import { AuthContext } from "../../../Context/ContextProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const img_hosting_token = import.meta.env.VITE_UPLOAD_TOKEN;

const AddClass = () => {
  const { user, loading } = useContext(AuthContext);
  const formData = new FormData();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const image = imgRes.data.display_url;
          const classInfo = {
            ...data,
            status: "pending",
            image,
            price: parseFloat(data.price),
            availableSeat: parseFloat(data.availableSeat),
          };
          axios
            .post("https://framedmoments.vercel.app/class", classInfo)
            .then((response) => {
              console.log(response);
              if (response.data.insertedId) {
                toast.success("Successfully added your class", {
                  duration: 2000,
                });
                reset();
              }
            })
            .catch((error) => console.log("error", error));
        }
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="">
        <div className="bg-base-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full mx-auto border border-slate-400/20  border-gradient">
          <h1 className="text-center text-4xl font-bold uppercase mb-4">
            Class information
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="class-name"
              >
                Class Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-base-300"
                id="class-name"
                type="text"
                placeholder="Enter your class name"
                {...register("className", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="instructor-name"
              >
                Instructor Name
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-base-300"
                id="instructorName"
                type="text"
                value={user?.displayName}
                placeholder="Enter your name"
                {...register("instructorName", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="instructor-email"
              >
                Instructor Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-base-300"
                id="instructor-email"
                type="email"
                value={user?.email}
                placeholder="Enter your email"
                {...register("instructorEmail", { required: true })}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="available-seat"
              >
                Available Seats
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-base-300"
                id="available-seat"
                type="number"
                placeholder="Enter your seats"
                {...register("availableSeat", { required: true })}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-base-300"
                id="price"
                type="price"
                placeholder="price"
                {...register("price", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Class image
              </label>

              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                {...register("image", { required: true })}
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
};

export default AddClass;
