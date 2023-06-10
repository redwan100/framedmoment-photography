import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
const Banner = () => {
  return (
    <Carousel autoPlay>
      <div className="80vh]">
        <img
          className="h-full"
          src="https://i.ibb.co/FHtSj3T/slide1.jpg"
          alt=""
        />
      </div>
      <div>
        <img src="https://i.ibb.co/G5ffSRQ/slide2.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/9HnBLrd/slide3.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/bBXF8qr/slide4.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/6t5NvWM/slide5.jpg" alt="" />
      </div>
    </Carousel>
  );
};

export default Banner;
