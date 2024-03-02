import React, { useState } from "react";
import { data } from "../data";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Foods = () => {
  const [foods, setFood] = useState(data);
  // filterByType
  const filterByType = (type) => {
    if (String(type).toLocaleLowerCase() === "all") {
      setFood(data);
      return;
    }
    let out = data.filter(
      (food) => food.category === String(type).toLocaleLowerCase()
    );
    setFood(out);
  };
  // filterByPrice
  const filterByPrice = (price) => {
    let out = data.filter(
      (food) => food.price === String(price).toLocaleLowerCase()
    );
    setFood(out);
  };
  return (
    <div className=" max-w-[1640px] my-10 mx-auto">
      <Slide direction="up">
        <h3 className="text-center font-bold text-3xl text-orange-500">
          Top Reted Munu Items
        </h3>
      </Slide>
      {/* Filter */}
      <Fade>
        <div className="flex  justify-between flex-wrap">
          {/* Filter Type */}
          <div className="mx-10 my-5">
            <p className="font-bold text-xl text-gray-700">Filter Type </p>
            <div className="flex flex-row  items-start flex-wrap gap-4 my-4">
              <button
                onClick={() => filterByType("All")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                All
              </button>
              <button
                onClick={() => filterByType("burger")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                Burgers
              </button>
              <button
                onClick={() => filterByType("Pizza")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                Pizza
              </button>
              <button
                onClick={() => filterByType("salad")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                Salads
              </button>
              <button
                onClick={() => filterByType("chicken")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                chicken
              </button>
            </div>
          </div>
          {/* Filter Price */}
          <div className="mx-10 my-5">
            <p className="font-bold text-xl text-gray-700">Filter Price </p>
            <div className="flex flex-row  items-start flex-wrap gap-4 my-4">
              <button
                onClick={() => filterByPrice("$")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                $
              </button>
              <button
                onClick={() => filterByPrice("$$")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                $$
              </button>
              <button
                onClick={() => filterByPrice("$$$")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                $$$
              </button>
              <button
                onClick={() => filterByPrice("$$$$")}
                className="text-orange-500 border border-orange-500 p-2 rounded-full hover:text-white hover:bg-orange-500 font-bold duration-300"
              >
                $$$$
              </button>
            </div>
          </div>
        </div>
      </Fade>
      {/* foods  */}
      <div className=" grid md:grid-cols-4 gap-3 mx-10 ">
        {foods &&
          foods.map((food, index) => {
            return (
              <Fade delay={100} key={index}>
                <div className=" rounded-md border shadow-lg  ">
                  <div className="overflow-hidden rounded-md">
                    <img loading="lazy" 
                      className="w-full h-[220px] object-cover hover:scale-[1.1] duration-300 rounded-md"
                      src={food.image}
                      alt={food.name}
                    />
                  </div>
                  <div className="p-4 flex  justify-between font-bold">
                    <p>{food.name}</p>
                    <span className="bg-orange-500 p-1  rounded-lg text-white hover:tracking-[1.2px] duration-200 ">
                      {food.price}
                    </span>
                  </div>
                </div>
              </Fade>
            );
          })}
      </div>
    </div>
  );
};

export default Foods;
