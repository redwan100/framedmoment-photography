import axios from "axios";
import Loading from "../../Shared/Loading/Loading";
import Row from './Row'
import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useState } from "react";
import Feedback from "../../Shared/Feedback/Feedback";


const MangeClass = () => {
  const [axiosSecure] = useAxiosSecure()
  const [isShow, setIsShow] = useState(false)
     const {
       data: classes = [],
       refetch,
       isLoading,
     } = useQuery({
       queryKey: ["all-classes"],
       queryFn: async () => {
         const res = await axiosSecure.get("/all-classes");

         console.log(res.data);
         return res.data;
       },
     });

     if (isLoading) {
       return <Loading />;
     }

     const handleFeedbackModal = () => {
      setIsShow(!isShow)
     }

  return (
    <div className="relative">
      <div className={`${isShow ? "block" : "hidden"}`}>
        <Feedback handleFeedbackModal={handleFeedbackModal} />
      </div>
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
              <Row
                key={user._id}
                classList={user}
                index={index}
                refetch={refetch}
                handleFeedbackModal={handleFeedbackModal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MangeClass