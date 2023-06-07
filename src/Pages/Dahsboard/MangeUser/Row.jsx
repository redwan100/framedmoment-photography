
const Row = ({index, user}) => {
    const {_id, name, email,photo} = user;
  return (
    <>
      <tr className="odd:bg-slate-50 even:bg-slate-200 hover:bg-slate-300">
        <th>
         {index + 1}
        </th>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                />
              </div>
            </div>
          
        </td>
        <td>
        {name}
        </td>
        <td>{email}</td>
        <th className="">
          <button className="btn btn-ghost btn-xs">Instructor</button>
          <button className="btn btn-ghost btn-xs">Admin</button>
        </th>
      </tr>
    </>
  );
}

export default Row