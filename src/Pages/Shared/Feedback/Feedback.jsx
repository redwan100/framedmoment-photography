import axios from "axios";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";

const Feedback = ({ handleFeedbackModal }) => {
  const inputRef = useRef(null)

  const {id} = useParams()
  
const something = () => {
  const feedback = inputRef.current.value;
  inputRef.current.value = ''

  axios.patch(`http://localhost:5000/feedback/${id}`, {feedback})
  .then(res => {
    console.log(res.data);
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