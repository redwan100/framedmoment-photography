import ClassItem from "./ClassItem"
import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import axios from "axios";

const Classes = () => {
const {user} = useContext(AuthContext)

  const { data: classes = [] } = useQuery({
    queryKey: ["approved-class"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/approved-class");

      return res.data;
    },
  });


  
  return (
    <div className="py-12">
      {classes.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-3">
          {classes?.map((item) => (
            <ClassItem key={item._id} classes={item} />
          ))}
        </div>
      ) : (
        <p className="text-center font-semibold my-8 text-3xl sm:text-4xl">No Data Found</p>
      )}
    </div>
  );
}

export default Classes