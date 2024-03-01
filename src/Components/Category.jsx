import React from "react";
import { categories } from "../data";

const Category = () => {
  console.log(categories);
  return (
    <div className="mx-auto max-w-[1640px] ">
      <h3 className="text-center font-bold text-3xl text-orange-500">
        Top Reted Munu Items
      </h3>
      {/* boxs */}
      <div className="  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 m-10 ">
        {/* box  */}
        {categories &&
          categories.map((cat, index) => {
            return (
              <div
                key={index}
                className="  bg-gray-200 flex justify-evenly p-2 flex-row  items-center rounded-md hover:bg-gray-300 duration-100 cursor-pointer"
              >
                <p className=" font-bold md:text-xl">{cat.name}</p>
                <img className="w-20" src={cat.image} alt={cat.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
