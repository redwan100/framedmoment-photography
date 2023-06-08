import axios from "axios";
import { useEffect, useState } from "react"
import Row from "./Row";

const MySelectClass = () => {
 const [allClasses, setAllClasses] = useState([])
  useEffect(() => {
 axios
   .get("http://localhost:5000/allSelectedCourse")
   .then((res) => setAllClasses(res.data));
  },[])
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
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((item, index) =>
            <Row key={item._id} course={item} index={index} />) }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MySelectClass