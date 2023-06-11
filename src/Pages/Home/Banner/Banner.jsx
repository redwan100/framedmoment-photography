import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
const Banner = () => {
  return (
    <Carousel autoPlay>
      <div className="relative">
        <img
          className="h-full"
          src="https://i.ibb.co/FHtSj3T/slide1.jpg"
          alt=""
        />

        <div className="max-w-md p-3 rounded-md  absolute top-2/4 left-8 text-white bg-slate-900/70 sm:left-32 ">
          <h1 className="text-2xl">Mastering the Art of Photography</h1>
          <small className="text-gray-200">
           This course aims to provide a comprehensive understanding of photography, covering everything from technical aspects like exposure and composition to creative elements like storytelling and capturing emotions.
          </small>
        </div>
      </div>
     <div className="relative">
        <img src="https://i.ibb.co/G5ffSRQ/slide2.jpg" alt="" />

        <div className="max-w-md p-3 rounded-md  absolute top-2/4 left-8 text-white bg-slate-900/70 sm:left-32 ">
          <h1 className="text-2xl">Dreamy Beach Escape</h1> 
          <small className="text-gray-200">
            {" "}
            Transport yourself to a tranquil paradise with this dreamy beach
            photoshoot. Against the backdrop of golden sands, azure waters, and
            a breathtaking
          </small>
        </div>
      </div> 
      <div className="relative">
        <img src="https://i.ibb.co/9HnBLrd/slide3.jpg" alt="" />

        <div className="max-w-md p-3 rounded-md  absolute top-2/4 left-8 text-white bg-slate-900/70 sm:left-32 ">
          <h1 className="text-2xl">Fashion Frenzy</h1>
          <small className="text-gray-200">
            Dive into the world of high fashion and style with this vibrant and
            edgy photoshoot. Featuring bold outfits, dramatic makeup, and unique
            locations, the images will capture the spirit of fashion-forward
            individuals and make a statement.
          </small>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.ibb.co/bBXF8qr/slide4.jpg" alt="" />

        <div className="max-w-md p-3 rounded-md  absolute top-2/4 left-8 text-white bg-slate-900/70 sm:left-32 ">
          <h1 className="text-2xl">Dreamy Beach Escape</h1>
          <small className="text-gray-200">
            {" "}
            Transport yourself to a tranquil paradise with this dreamy beach
            photoshoot. Against the backdrop of golden sands, azure waters, and
            a breathtaking
          </small>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/9HnBLrd/slide3.jpg" alt="" />

        <div className="max-w-md p-3 rounded-md  absolute top-2/4 left-8 text-white bg-slate-900/70 sm:left-32 ">
          <h1 className="text-2xl">The Art of Landscape Photography</h1>
          <small className="text-gray-200">
            This course delves into the intricacies of landscape photography,
            teaching participants how to use natural light, compose stunning
            landscapes, and enhance the mood and atmosphere of their images.
          </small>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
