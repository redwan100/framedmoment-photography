import axios from "axios";
import Swal from "sweetalert2";

// TODO: tanStackQuery 

const Row = ({ classList, index, refetch, handleFeedbackModal }) => {
  const {
    _id,
    className,
    instructorName,
    instructorEmail,
    availableSeat,
    price,
    image,
    status,
  } = classList;

  const handleApproveDeny = (text) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes Make It ${text}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:5000/class-status/${_id}`, { text })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: ` Post is ${text}`,
                showConfirmButton: false,
                timer: 1500,
              });

              refetch();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <>
      <tr className="odd:bg-slate-50 even:bg-slate-200 hover:bg-slate-300">
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
        <td>{instructorEmail}</td>
        <td>{availableSeat}</td>
        <td>{price}</td>
        <th className="">
          <button
            disabled={status === "denied"}
            className={`btn btn-xs ${
              status === "pending" && "bg-red-200 text-red-500"
            } ${status === "approved" && "bg-green-200 text-green-500"}`}
          >
            {status}
          </button>
        </th>
        <th className="">
          <div className="btn-group">
            <button
              className="btn btn-xs bg-teal-500 text-white hover:bg-teal-400"
              disabled={status === "approved" || status === "denied"}
              onClick={() => handleApproveDeny("approved")}
            >
              Approve
            </button>
            {/* <button
              className="btn btn-xs"
              disabled={status === "approved" || status === "denied"}
              onClick={() => handleApproveDeny("denied")}
            >
              Deny
            </button> */}
            {/* <button className="btn btn-xs  bg-orange-500 text-white hover:bg-red-500">
              Feedback
            </button> */}
          </div>
        </th>
        <td>
          <button
            className="btn btn-xs"
            disabled={status === "approved" || status === "denied"}
            onClick={() => handleApproveDeny("denied")}
          >
            Deny
          </button>
        </td>
        <td>
          <button
            className="btn btn-xs  bg-orange-500 text-white hover:bg-red-500"
            onClick={handleFeedbackModal}
          >
            Feedback
          </button>
        </td>
      </tr>
    </>
  );
};

export default Row