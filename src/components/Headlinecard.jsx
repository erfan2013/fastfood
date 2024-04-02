import React from "react";

const HeadlineCard = () => {
  return ( 
  <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">sun's out , BOGO's Out</p>
        <p className="px-2">Through 8/26</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
    </div>
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">We Deliverd Deserts</p>
        <p className="px-2">Tasty Treats</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1633495/pexels-photo-1633495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
    </div>
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">New Resturants</p>
        <p className="px-2">Added Daily</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1239347/pexels-photo-1239347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
    </div>
  </div>
  );
};

export default HeadlineCard;
