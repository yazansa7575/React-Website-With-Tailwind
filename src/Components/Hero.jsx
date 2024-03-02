import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="px-2">
      {/* container  */}
      <div className=" max-w-[1640px] w-[100%]  mx-auto relative h-[500px] ">
        <div className=" absolute flex flex-col justify-center h-full max-h-[500px] w-[100%] bg-black/30 pl-10">
          <Zoom>
            <h1 className="text-white text-5xl  font-bold">
              The <span className="text-orange-400">Best</span>
            </h1>
            <h1 className="text-white text-5xl  font-bold">
              Food <span className="text-orange-400">Delivery</span>
            </h1>
          </Zoom>
        </div>
        <img loading="lazy" 
          className="h-full w-full max-h-[500px] object-cover "
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
