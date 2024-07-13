import React from "react";
import Button from "./components/Buttons";
import { useState } from "react";

function App() {
  const data = [
    {
      name: "Mike",
      profession: "Painter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s",
      friend: false,
    },
    {
      name: "Johnny",
      profession: "Singer",
      image:
        "https://media.istockphoto.com/id/507995592/photo/pensive-man-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=fVoaIqpHo07YzX0-Pw51VgDBiWPZpLyGEahSxUlai7M=",
      friend: false,
    },
    {
      name: "Sam",
      profession: "Chapri",
      image:
        "https://media.istockphoto.com/id/1310533180/photo/cheerful-fashionable-adult-man-in-city-setting.jpg?s=612x612&w=0&k=20&c=hfy_5L8llmz_sUp1_n1NbM5Gsyk0kUbJRmR3TXAaoMM=",
      friend: false,
    },
    {
      name: "David",
      profession: "Coder",
      image:
        "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
      friend: false,
    },
  ];

  const [realData, updateData] = useState(data);
  // Update values here...
  const updateFriends = (cardIndex) => {
    updateData((prev) => {
      return prev.map((ele, index) => {
        if (index === cardIndex) {
          return { ...ele, friend: !ele.friend };
        }
        return ele;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center gap-2 bg-zinc-700">
        {realData.map((item, index) => (
          <Button
            key={index}
            index={index}
            handleFriend={updateFriends}
            friend={item.friend}
            values={item}
          />
        ))}
      </div>
    </>
  );
}

export default App;
