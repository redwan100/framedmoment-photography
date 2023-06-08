import {LuTrash} from 'react-icons/lu'
const Row = ({course, index}) => {
       const {
         __id,
         className,
         instructorName,
         instructorEmail,
         availableSeat,
         price,
         image,
         status,
       } = course;
 
    
  return (
    <>
      <tr className="even:bg-slate-50 odd:bg-slate-200 hover:bg-slate-300">
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
        <td className="text-right">{price}</td>
        <th className="">
          <button className="bg-orange-500 text-white py-1 px-2 rounded-md hover:bg-orange-600">Pay</button>
        </th>
        <th className="">
          <button className="w-8 h-8 grid place-content-center rounded-md bg-red-500 text-white border border-red-500 hover:bg-transparent hover:text-red-500">
            <LuTrash size={20}/>
          </button>
        </th>
      </tr>
    </>
  );
}

export default Row