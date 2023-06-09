import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Row from './Row'
import {useQuery} from '@tanstack/react-query'


const MangeClass = () => {

     const {
       data: classes = [],
       refetch,
       isLoading,
     } = useQuery({
       queryKey: ["all-classes"],
       queryFn: async () => {
         const res = await axios.get("http://localhost:5000/all-classes");

         console.log(res.data);
         return res.data;
       },
     });

     if (isLoading) {
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
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((user, index) => (
              <Row key={user._id} classList={user} index={index} refetch={refetch}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MangeClass