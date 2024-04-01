import React from "react";


const Hero = () => {
  return( 
  <div className="max-w-[1640px] mx-auto p-4">
    <div className="m-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-500">Foods</span> Deliverd</h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src='https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-with-fries-generated-by-ai_24640-81500.jpg?t=st=1711873621~exp=1711877221~hmac=655ad0ace5f914d76490237156a146aff3319d51e0353d7199f3b36d2cb558cd&w=1060' alt="food" />
    </div>
  </div>
  )
};

export default Hero;