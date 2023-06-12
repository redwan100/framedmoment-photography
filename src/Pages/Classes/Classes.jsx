import ClassItem from "./ClassItem"
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import Loading from "../Shared/Loading/Loading";

const Classes = () => {

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["approved-class"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/approved-class");

      return res.data;
    },
  });


  if(isLoading){
    return <Loading />
  }
  
  return (
    <div className="py-12">
      {classes.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-5">
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