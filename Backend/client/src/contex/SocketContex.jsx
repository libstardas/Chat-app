import { useAuth } from "./AuthProvider";
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const socketContex = createContext();
export const useSocketContext = () => {
  return useContext(socketContex);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:4000/", {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);
      socket.on("getonlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <socketContex.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContex.Provider>
  );
};
