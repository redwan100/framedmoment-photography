
const Card = ({enroll}) => {
  console.log(enroll);
  const {
    className, image, instructorName, instructorEmail,
  } = enroll;
  return (
    <div className="card card-side bg-base-300 shadow-xl">
      <figure className="h-[18rem] w-[20rem]">
        <img src={image} className="h-full w-full object-cover aspect-square"/>
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">Class Name: {className}</h2>
          <p>Instructor: {instructorName}</p>
          <p>Email: {instructorEmail}</p>
        </div>
      </div>
    </div>
  );
}

export default Card