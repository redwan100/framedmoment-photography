import axios from "axios"
import Row from "./Row"
import Loading from "../../Shared/Loading/Loading"
import {useQuery} from '@tanstack/react-query'

const MangeUser = () => {


        const {
          data: users = [],
          refetch,
          isLoading,
        } = useQuery({
          queryKey: ["allusers"],
          queryFn: async () => {
            const res = await axios.get("http://localhost:5000/all-users");

            console.log(res.data);
            return res.data;
          },
        });

        if (isLoading) {
          return <Loading />;
        }


  return (
    <>
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
            {users?.map((user, index) => <Row key={user._id} userItem={user} index={index} refetch={refetch}/>)}
          </tbody>
    
        </table>
      </div>
    </>
  );
}

export default MangeUser