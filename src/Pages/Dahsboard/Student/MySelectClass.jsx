import axios from "axios";
import Row from "./Row";
import Loading from "../../Shared/Loading/Loading";
import {useQuery} from '@tanstack/react-query'
import useCart from "../../../Hooks/useCard/useCard";

const MySelectClass = () => {
const [cart, cartRefetch] = useCart();
const total = cart.reduce((acc, cur) =>{
  acc+= cur.price
  cartRefetch()
  return acc;
},0)


  const {data: allClasses = [], refetch, isLoading} = useQuery({
    queryKey:['allClasses'],
    queryFn: async() =>{
      const res = await axios.get('http://localhost:5000/allSelectedCourse')


      return res.data;
    }
  })
  if(isLoading) return <Loading />


  return (
    <div>
      <p className="text-right font-semibold my-2">Total Price: ${total}</p>
     {allClasses && allClasses.length > 0 ?( <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((item, index) =>
            <Row key={item._id} course={item} index={index}  refetch={refetch}/>) }
          </tbody>
        </table>
      </div>):<p className="text-center text-3xl font-semibold">No Data found</p>}
    </div>
  );
}

export default MySelectClass