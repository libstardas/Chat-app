import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../contex/useSendMessage.js";
const Type = () => {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3 h-[10vh] text-center bg-gray-800">
          <div className="w-[70%] mx-4">
            <input
              type="text"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" border-[1px] border-gray-700 flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
            />
          </div>
          <button type="submit" className="text-3xl">
            <IoMdSend />
          </button>
        </div>
      </form>
    </>
  );
};

export default Type;
