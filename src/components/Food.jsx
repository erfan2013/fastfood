import React from "react";
import { data } from "../data/data.js";
import { useState } from "react";
const Food = () => {
    const [foods, setFood] = useState(data);

    const filterType = (category) => {
        setFood(data.filter((item) => item.category === category));
    };
    const filterPrice = (price) => {
        setFood(data.filter((item) => item.price === price));
    };


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
            
          <p className="font-bold text-gray-700">filter Type</p>
          <div className="flex justify-start flex-wrap">
          <button onClick={()=> setFood(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
          <button onClick={()=> filterType('burger')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burger</button>
          <button onClick={()=> filterType('pizza')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
          <button onClick={()=> filterType('salad')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
          <button onClick={()=> filterType('chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=> filterPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
            <button onClick={()=> filterPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
            <button onClick={()=> filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
            <button onClick={()=> filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((items,index) => (
            <div className="border shadow-lg rounded-lg hover:scale-105 duration-300" key={index}>
                <img className="w-full h-[200px] object-cover rounded-t-lg" src={items.image} alt="" />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{items.name}</p>
                    <p>
                        <span className="bg-orange-500 text-white p-1 rounded-full">{items.price}</span>
                    </p>
                </div>    
            </div>

        ))}
      </div>
    </div>
  );
};

export default Food;
