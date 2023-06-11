import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const Feedback = ({ handleFeedbackModal }) => {
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const {id} = useParams()
  const [axiosSecure] = useAxiosSecure()
  
const something = () => {
  const feedback = inputRef.current.value;
  inputRef.current.value = ''

  axiosSecure.patch(`/feedback/${id}`, {feedback})
  .then(res => {
    console.log(res.data);
    if(res.data.modifiedCount > 0){
      navigate('/dashboard/manage-class')
    }
  })

}


 
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="bg-gray-800 p-8 rounded-md relative w-full h-full">
        <span
          className="text-white absolute -top-3 -right-2 bg-black w-8 h-8 rounded-full grid place-content-center cursor-pointer"
          onClick={handleFeedbackModal}
        >
          <Link to={"/dashboard/manage-class"}> X</Link>
        </span>
        <textarea
          ref={inputRef}
          placeholder="Bio"
          className="textarea textarea-bordered w-full textarea-lg"
        ></textarea>
        <button className="btn btn-secondary w-full" onClick={something}>
          Send 
        </button>
      </div>
    </div>
  );
};

export default Feedback