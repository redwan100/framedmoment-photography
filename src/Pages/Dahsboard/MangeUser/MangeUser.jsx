import axios from "axios"
import { useEffect, useState } from "react"
import Row from "./Row"
import Loading from "../../Shared/Loading/Loading"

const MangeUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
   useEffect(()=>{
     axios.get("http://localhost:5000/all-users").then((data) => {
       setUsers(data.data);
       setLoading(false)
     });
   }, [])

    console.log(users);
    if(loading) {
        return <Loading />
    }
  return (
    <div>
      All users: {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => <Row key={user._id} user={user} index={index}/>)}
          </tbody>
    
        </table>
      </div>
    </div>
  );
}

export default MangeUser