import { Bounce} from "react-awesome-reveal";
const Card = ({ instructor }) => {
  const { name, email, photo } = instructor;
  return (
    <Bounce delay={200}>
      <div className="card card-compact bg-base-200 shadow-md border border-slate-700">
        <figure>
          <img src={photo} className="w-full h-[15rem] object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p className="flex items-center gap-3">Email: {email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-neutral">Details</button>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default Card;
