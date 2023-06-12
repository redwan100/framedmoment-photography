import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LuTrash } from "react-icons/lu";
import { useState } from "react";
const Row = ({ course, index, refetch }) => {
  const { _id, className, instructorName, availableSeat, price, image } =
    course;
  // TODO: tanStackQuery

  const handleDeleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://framedmoments.vercel.app/selectedClasses/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              refetch();
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="even:bg-base-300 odd:bg-base-200 hover:bg-base-300">
        <th>{index + 1} </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} />
            </div>
          </div>
        </td>
        <td>{className}</td>
        <td>{instructorName}</td>
        <td className="text-center">{availableSeat}</td>
        <td className="text-right">${price}</td>
        <th className="">
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="bg-orange-500 text-white py-1 px-2 rounded-md hover:bg-orange-600">
              Pay
            </button>
          </Link>
        </th>
        <th className="" onClick={() => handleDeleteClass(_id)}>
          <button className="w-8 h-8 grid place-content-center rounded-md bg-red-500 text-white border border-red-500 hover:bg-transparent hover:text-red-500">
            <LuTrash size={20} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default Row;
