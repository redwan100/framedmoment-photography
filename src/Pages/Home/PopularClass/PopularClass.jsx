import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";

const PopularClass = () => {
  const [isLayout, setIsLayout] = useState("grid");
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/popularClass").then((res) => {
      setPopularClass(res.data);
    });
  }, []);

  const toggleLayout = (text) => {
    setIsLayout(text);
    console.log(text);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl uppercase font-medium">
          Popular class
        </h1>
        <p className="text-center text-xs sm:text-base">Find Courses and Specializations from top instructor</p>
      </div>
      <div className="rounded-md w-max my-2 ml-4 bg-slate-700 mr-3 flex gap-2">
        <span
          className={`rounded-md cursor-pointer p-2 text-white ${
            isLayout === "grid" && "bg-slate-500"
          }`}
          onClick={() => toggleLayout("grid")}
        >
          <CiGrid41 size={20} />
        </span>

        <span
          className={`rounded-md p-2 text-white cursor-pointer ${
            isLayout === "single" && "bg-slate-500"
          }`}
          onClick={() => toggleLayout("single")}
        >
          <CiGrid2H size={20} />
        </span>
      </div>
      {popularClass.length > 0 && Array.isArray(popularClass) ? (
        <div
          className={`grid gap-5 ${
            isLayout === "grid"
              ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
              : "grid-cols-1"
          }`}
        >
          {popularClass.map((popular) => (
            <Card key={popular._id} popular={popular} isLayout={isLayout} />
          ))}
        </div>
      ) : (
        <p className="text-center text-4xl font-medium">No data found</p>
      )}
    </div>
  );
};

export default PopularClass;
