import { FaBook } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { VscRemoteExplorer } from "react-icons/vsc";
import Card from './Card';
const data = [
  {
    id: 1,
    title: "Learn at your pace",
    desc: "Courses for all levels cover technical skills, creative techniques, business strategies, and more. We have collected.",
    icon: <FaBook />,
  },
  {
    id: 2,
    title: "Explore courses",
    desc: "Sign up and find out for yourself why so many people are taking and recommending this course. I genuinely believe.",
    icon:<VscRemoteExplorer />
  },
  {
    id: 3,
    title: "Enroll in courses",
    desc: "Get unlimited access to 2,000 of Udemy’s top courses for your team. Teach what you love. Udemy gives you the tools.",
    icon:<BsFillPlayCircleFill />
  },
];
const CourseAbout = () => {
  return (
    <div className="my-[6rem] bg-base-200 py-[4rem] px-1 rounded-md">
      <h1 className="text-center text-3xl font-medium sm:text-4xl">We Provide Unique Shots</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-5 py-5 ">
        {data.map((item) => (
          <Card key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
}

export default CourseAbout