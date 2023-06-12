import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import Card from "./Card";
const Instructors = () => {
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["allInstructor"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/admin/instructors");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-8 my-8">
      {instructors.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {instructors.map((instructor) => (
            <Card key={instructor._id} instructor={instructor} />
          ))}
        </div>
      ) : (
        <p className="text-center text-3xl font-semibold tracking-[.25rem]">
          No Instructors
        </p>
      )}
    </div>
  );
};

export default Instructors;
