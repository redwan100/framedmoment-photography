import axios from "axios";
import { useEffect, useState } from "react"
import Row from "./Row";
import Loading from "../../Shared/Loading/Loading";

const MySelectClass = () => {
  const [loading, setLoading] = useState(true)
 const [allClasses, setAllClasses] = useState([])
  useEffect(() => {
 axios
   .get("http://localhost:5000/allSelectedCourse")
   .then((res) => {
    setAllClasses(res.data);
    setLoading(false)
   });
  },[])


  if(loading) return <Loading />

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