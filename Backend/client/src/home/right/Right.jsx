import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../contex/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className=" w-full bg-slate-800 text-gray-300">
      <div>
        {!selectedConversation ? (
          <Nochat />
        ) : (
          <>
            <Chatuser />
            <div
              className="py-2 flex-anki overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
};
export default Right;

const Nochat = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center font-semibold text-xl ">
          Welcome <span>{authUser.user.email}</span>
          <br></br> select a Conversation to start a chat.
        </h1>
      </div>
    </>
  );
};
