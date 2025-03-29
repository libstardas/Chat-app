import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");

        const response = await axios.get("/api/user/getUserProfile", {
          Credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data.filiteredUsers);
        setLoading(false);
      } catch (error) {
        console.log("Error in get useGetAllUsers:" + error);
      }
    };
    getUsers();
  }, []);
  return [allUsers, loading];
};

export default useGetAllUsers;
