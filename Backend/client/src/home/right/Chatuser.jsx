import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../contex/SocketContex.jsx";
const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  const isOnline = getOnlineUserStatus(selectedConversation._id);
  console.log(isOnline);

  return (
    <div className="pl-5 pt-5  h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
      <div>
        <div
          className={`avatar ${isOnline === "Online" ? "avatar-online" : ""}`}
        >
          {/* <div className={`avatar avatar-online`}> */}
          <div className=" w-14 rounded-full">
            <img src="/src/assets/lib.jpg" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>

        <span className="text-sm">
          {getOnlineUserStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
};

export default Chatuser;
