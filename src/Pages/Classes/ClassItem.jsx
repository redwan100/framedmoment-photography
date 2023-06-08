import {AiOutlineShoppingCart} from 'react-icons/ai'
const ClassItem = ({classes}) => {

    const {_id,className, instructorName, image, price, availableSeat} = classes;


  return (
    <div
      className={`card card-side grid lg:grid-cols-2 shadow-xl bg-slate-50 ${
        availableSeat == 0 && "bg-red-100 text-red-500 border border-red-300"
      }`}
    >
      <figure className="max-h-[18rem] sm:max-h-96">
        <img
          className="w-full h-full object-cover "
          src={image}
          alt="course photo"
        />
      </figure>
      <div className="card-body flex ">
        <div className="flex flex-col h-full">
          <div className="space-y-1">
            <h2 className="text-2xl font-medium uppercase mb-4">{className}</h2>
            <h3>
              Instructor: <span className="font-medium">{instructorName}</span>
            </h3>
            <h3>
              Price: $<span className="font-medium">{price}</span>{" "}
            </h3>
            <h3 className="font-medium">Seat: {availableSeat}</h3>
          </div>
          <div className="mt-auto">
            <button className="bg-violet-700 text-white py-2 px-4 rounded-md flex items-center gap-2 ml-auto hover:bg-violet-800">
              Buy Course <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassItem