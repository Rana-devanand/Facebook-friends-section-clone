import React from "react";

function Buttons({ values, handleFriend, index }) {
  const { name, profession, image, friend } = values; // method 2 - to access the props
  return (
    <>
      <div className="w-36 bg-zinc-200 rounded-md">
        <div className="w-full h-24 bg-blue-300 rounded-md">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs">{profession}</p>
          <button
            onClick={() => handleFriend(index)}
            className={`${
              friend === false ? "bg-blue-600 text-xs" : "bg-red-600 text-xs"
            } px-3 py-1 my-2 ml-1  rounded-md text-white "`}
          >
            {friend === false ? "Add friend" : "Remove friend"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
