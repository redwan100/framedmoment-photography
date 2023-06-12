import { BsCart2 } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Card = ({popular, isLayout}) => {
    const {className, image, instructorName} = popular;
  return (
    <div className="card glass">
      <figure
        className={`h-[16rem] ${
          isLayout === "single" && "md:h-[30rem] lg:h-[35]"
        } `}
      >
        <img src={image} className="w-full h-full object-cover aspect-square" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {className}</h2>
        <p>Instructor: {instructorName}</p>
        <div className="card-actions justify-end">
          <Link to={`/classes/`}>
            <button className={`btn ${isLayout === "single" ? "btn-md" : "btn-sm"}`}>
              Buy Now
              <BsCart2 />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card