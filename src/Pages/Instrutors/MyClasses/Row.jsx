
const Row = ({ index, userItem }) => {
  const {
    _id,
    instructorName,
    instructorEmail,
    image,
    status,
    availableSeat,
    className,
    price,
    feedback,
  } = userItem;
  return (
    <>
      <tr className="odd:bg-slate-50 even:bg-slate-200 hover:bg-slate-300">
        <th>{index + 1} </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} />
            </div>
          </div>
        </td>
        <th>{className}</th>
        <td>{instructorName}</td>
        <td>{instructorEmail}</td>

        <td>${price}</td>
        <td className="text-center">{availableSeat}</td>
        <td className="text-center">{0}</td>
        <th className="">
          <button
            className={`btn btn-xs ${
              status === "pending" && "bg-red-200 text-red-500"
            } ${status === "approved" && "bg-green-200 text-green-500"}`}
          >
            {status}
          </button>
        </th>

        <td>
          <button className="btn btn-xs  bg-pink-500 text-white hover:bg-pink-400">
            Update
          </button>
        </td>
        <td>
          {feedback && (
            <p className="">
              {feedback}
            </p>
          )}
        </td>
      </tr>
    </>
  );
};

export default Row