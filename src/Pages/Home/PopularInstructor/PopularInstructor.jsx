import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Card from "./Card";
import Loading from "../../Shared/Loading/Loading";
const PopularInstructor = () => {
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["popular instruction"],
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
        <h1 className="mb-8 text-center text-2xl font-semibold uppercase sm:text-4xl">Most Popular instructors</h1>
      {instructors.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {instructors.slice(0,6).map((instructor) => (
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

export default PopularInstructor;