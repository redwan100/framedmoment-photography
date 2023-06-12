import { Slide } from "react-awesome-reveal";

const Card = ({course}) => {
    const {title, desc, icon} = course;
  return (
    <Slide direction="right" damping={0.3}>
      <div className="grid grid-cols-[80px_1fr] bg-base-300 p-4 rounded-md ">
        <span className="text-6xl justify-center">{icon}</span>
        <div>
          <h1 className="text-3xl">{title}</h1>
          <p className="text-xs sm:text-base">{desc}</p>
        </div>
      </div>
    </Slide>
  );
}

export default Card