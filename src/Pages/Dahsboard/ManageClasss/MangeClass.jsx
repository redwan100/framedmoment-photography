import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Row from './Row'

const MangeClass = () => {
     const [classes, setClasses] = useState([]);
     const [loading, setLoading] = useState(true);
     useEffect(() => {
       axios.get("http://localhost:5000/all-classes").then((data) => {
         setClasses(data.data);
         setLoading(false);
       });
     }, []);

     if (loading) {
       return <Loading />;
     }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((user, index) => (
              <Row key={user._id} classList={classes} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MangeClass