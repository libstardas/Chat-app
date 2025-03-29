import React from "react";
import User from "./User";
import useGetAllUsers from "../../contex/useGetAllUsers";
const Users = () => {
  const [allUsers, loading] = useGetAllUsers();
  return (
    <div
      style={{ maxHeight: "calc(88vh - 10vh)" }}
      className=" py-2 flex-anki overflow-y-auto"
    >
      {allUsers.map((user, index) => {
        return <User key={index} user={user} />;
      })}
    </div>
  );
};

export default Users;
