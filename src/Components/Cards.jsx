import React from "react";
import { Fade } from "react-awesome-reveal";

const Cards = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4   my-5  grid  md:grid-cols-3 gap-6 ">
      {/* card  */}
      <Fade>
        <div className=" overflow-hidden   rounded-md shadow-md shadow-black/50  relative  ">
          <div className="absolute h-full  w-full  flex flex-col  items-start justify-center pl-5 duration-200 bg-black/45 hover:bg-black/35">
            <h3 className="text-white z-20 font-bold text-3xl  ">
              Sun' Out, BoGo's out
            </h3>
            <p className="text-white z-20 font-bold">Through 8/26</p>
            <button className="absolute bottom-[22px] text-black z-20 p-1 px-4 rounded-full my-1 duration-300 bg-white hover:bg-black hover:text-white">
              Order Now
            </button>
          </div>
          <img
            loading="lazy"
            className=" max-h-[180px] w-full md:max-h-[200px] object-cover "
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </Fade>
      {/* card  */}
      <Fade>
        <div className=" overflow-hidden   rounded-md shadow-md shadow-black/50  relative   ">
          <div className=" absolute h-full  w-full  flex flex-col   items-start justify-center pl-5 duration-200 bg-black/45 hover:bg-black/35">
            <div>
              <h3 className="text-white z-20 font-bold text-3xl  ">
                New Resturants
              </h3>
              <p className="text-white z-20 font-bold">Add Daily </p>
            </div>
            <button className="absolute bottom-[22px] text-black z-20 p-1 px-4 rounded-full my-1 duration-300 bg-white hover:bg-black hover:text-white">
              Order Now
            </button>
          </div>
          <img
            loading="lazy"
            className=" max-h-[180px] w-full md:max-h-[200px] object-cover "
            src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </Fade>
      {/* card  */}
      <Fade>
        <div className=" overflow-hidden   rounded-md shadow-md shadow-black/50  relative">
          <div className="  absolute h-full  w-full  flex flex-col  items-start justify-center pl-5 duration-200 bg-black/45 hover:bg-black/35">
            <h3 className="text-white z-20 font-bold text-3xl  ">
              We Deliver Desserts Too
            </h3>
            <p className="text-white z-20 font-bold">Testy Treasts</p>
            <button className="absolute bottom-[22px] text-black z-20 p-1 px-4 rounded-full my-1 duration-300 bg-white hover:bg-black hover:text-white">
              Order Now
            </button>
          </div>
          <img
            loading="lazy"
            className=" max-h-[180px] w-full md:max-h-[200px] object-cover "
            src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Cards;
