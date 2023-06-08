import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
const Row = ({index, user}) => {
    const {_id, name, email,photo} = user;
    const [role, setRole] = useState([])
 

    useEffect(() => {
      axios.get('http://localhost:5000/all-users')
      .then(res => {
       setRole(res?.data);
       
      })
    },[])
    
    
    const handleAdminInstructor = (text) => {
        setRole(text)
        Swal.fire({
          title: "Are you sure?",
          // text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `Yes Make It ${text}`
        }).then((result) => {
          if (result.isConfirmed) {

            axios
              .patch(`http://localhost:5000/update-user-role/${_id}`, { text })
              .then((res) => {
                if (res.data.modifiedCount > 0) {
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: ` Now is ${text}`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    }
    
    
    
    return (
    <>
      <tr className="odd:bg-slate-50 even:bg-slate-200 hover:bg-slate-300">
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
          disabled={role==='instructor'}
            className="btn btn-ghost btn-xs"
            onClick={() => handleAdminInstructor("instructor")}
          >
            Instructor
          </button>
          <button
          disabled={role === 'admin'}
            className="btn btn-ghost btn-xs"
            onClick={() => handleAdminInstructor("admin")}
          >
            Admin
          </button>
        </th>
      </tr>
    </>
  );
}

export default Row