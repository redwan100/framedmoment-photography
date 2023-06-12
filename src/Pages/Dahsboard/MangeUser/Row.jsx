import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";



const Row = ({ index, userItem, refetch }) => {
  const [axiosSecure] = useAxiosSecure()
  const { _id, name, email, photo, role } = userItem;
  const handleAdminInstructor = (text) => {
    const instructorInfo = { name, email, photo, _id };

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
        axiosSecure
          .patch(`/user/admin/${_id}`, { text })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${name} Now is ${text}`,
                showConfirmButton: false,
                timer: 1500,
              });

              if(text === 'instructor'){
                axios.post(`http://localhost:5000/admin/instructor`, {
                  ...instructorInfo,
                })
                .then(res => console.log(res.data))
              }
            }

            refetch();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <>
      <tr
        className={`odd:bg-base-200 even:bg-base-300 hover:bg-slate-300 ${
          email === "ridoneislam987@gmail.com" && "hidden"
        }`}
      >
        <th>{index + 1} </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <th className="">
          <button
            disabled={role === "instructor"}
            className="btn btn-ghost btn-xs bg-base-300"
            onClick={() => handleAdminInstructor("instructor")}
          >
            Instructor
          </button>
          <button
            disabled={role === "admin"}
            className="btn btn-ghost btn-xs bg-base-300"
            onClick={() => handleAdminInstructor("admin")}
          >
            Admin
          </button>
        </th>
      </tr>
    </>
  );
};

export default Row;
