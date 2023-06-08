import React from 'react'

const Row = ({classList, index}) => {
    const {
      className,
      instructorName,
      instructorEmail,
      availableSeat,
      price,
      image,
      status,
    } = classList[0];
    console.log(classList);
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
        <td>{className}</td>
        <td>{instructorName}</td>
        <td>{instructorEmail}</td>
        <td>{availableSeat}</td>
        <td>{price}</td>
        <th className="">
            <button className="btn btn-xs">{status}</button>
        </th>
        <th className="">
          <div className="btn-group">
            <button className="btn btn-xs">Approve</button>
            <button className="btn btn-xs">Denny</button>
            <button className="btn btn-xs">Feedback</button>
          </div>
        </th>
      </tr>
    </>
  );
}

export default Row