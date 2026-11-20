import React from "react";
function Header() {
  return (
      <div className="h-40 w-full bg-gray-200 mt-6 flex justify-center items-center flex-col ">
        <h1 className="text-5xl">
          {" "}
          ❤️
        </h1> 
        <h3 className="text-4xl font-bold text-center leading-snug">
          Like Button App
          
        </h3>
        <h4 className="flex justify-center items-center gap-10 font-semibold text-xl">
          click the heart to like or unlike
        </h4>
      </div>
   
  );
}
export default Header;






