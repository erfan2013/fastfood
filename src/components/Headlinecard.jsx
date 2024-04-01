import React from "react";

const Headlinecard = () => {
  return ( 
  <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">sun's out , BOGO's Out</p>
        <p className="px-2">Through 8/26</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://img.freepik.com/free-photo/black-burger-white-burger-with-french-fries-wood-platter_140725-546.jpg?w=360" alt="/" />
    </div>
  </div>
  );
};

export default Headlinecard;
