import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AuthContext } from "../../Context/ContextProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCard/useCard";

const ClassItem = ({ classes }) => {
  const [, cartRefetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    className,
    instructorName,
    instructorEmail,
    image,
    price,
    availableSeat,
  } = classes;

  console.log({ classes });

  const handleBuyCourse = (course) => {
    /* ------------------ condition check user loggedIn or not ------------------ */
    if (!user) {
      Swal.fire({
        title: "First login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in");
          return;
        }
      });
      return;
    }

    const selectClassInfo = {
      course_id: course._id,
      className,
      instructorName,
      instructorEmail,
      image,
      price,
      availableSeat,
      email: user?.email,
    };

    axios
      .post("http://localhost:5000/userSelectedClass", selectClassInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully buy your course", { duration: 1500 });
          cartRefetch();
        }
      });
  };
  return (
    <div
      className={`bg-base-300 card card-side grid lg:grid-cols-2 shadow-xl ${
        availableSeat == 0 && "bg-red-100 text-red-500 border border-red-300"
      }`}
    >
      <figure className="max-h-[18rem] sm:max-h-96">
        <img
          className="w-full h-full object-cover "
          src={image}
          alt="course photo"
        />
      </figure>
      <div className="card-body flex ">
        <div className="flex flex-col h-full">
          <div className="space-y-1">
            <h2 className="text-2xl font-medium uppercase mb-4">{className}</h2>
            <h3>
              Instructor: <span className="font-medium">{instructorName}</span>
            </h3>
            <h3>
              Price: $<span className="font-medium">{price}</span>{" "}
            </h3>
            <h3 className="font-medium">Seat: {availableSeat}</h3>
          </div>
          <div className="mt-auto">
            <button
              disabled={availableSeat == 0}
              className="btn bg-violet-700 text-white py-2 px-4 rounded-md flex items-center gap-2 ml-auto hover:bg-violet-800"
              onClick={() => handleBuyCourse(classes)}
            >
              Buy Course <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
