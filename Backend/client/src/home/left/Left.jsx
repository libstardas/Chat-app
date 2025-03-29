import React from "react";
import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <div className=" w-full bg-black text-white ">
      <h1 className="font-bold text-3xl p-2 px-11">chats</h1>
      <Search />
      <hr></hr>
      <Users />
    </div>
  );
};

export default Left;
