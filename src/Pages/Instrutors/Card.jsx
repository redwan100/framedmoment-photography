
const Card = ({instructor}) => {
    const {name, email, photo} = instructor;
  return (
    <div className="card card-compact bg-base-100 shadow-md border border-base-300">
      <figure>
        <img src={photo} className="w-full h-[15rem] object-cover"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        Name: {name}
        </h2>
        <p className='flex items-center gap-3'>Email: {email}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-neutral">Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card