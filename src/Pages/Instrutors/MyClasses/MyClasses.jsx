import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/ContextProvider'
import Row from './Row'
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure'
import Loading from '../../Shared/Loading/Loading'



const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure()
  const {user, loading} = useContext(AuthContext)
  const {data:userData=[], isLoading} =useQuery({
    queryKey:['user'],
    enabled:!loading && !!user?.email,
    queryFn: async()=>{
      const res = await axiosSecure.get(
        `http://localhost:5000/instructor-classes/${user?.email}`
      );
      console.log(res.data);
      return res.data
    }
  })

  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <>
       {userData.length > 0 ?  <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Seat</th>
                <th>Total Enrolled Students</th>
                <th>Status</th>
                <th>Update</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user, index) => (
                <Row
                  key={user._id}
                  userItem={user}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>:<p className='text-center text3xl my-8 font-semibold sm:text-4xl'>No data found</p>}
      </>
    </div>
  );
}

export default MyClasses