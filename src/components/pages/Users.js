import React from "react";
import UserCard from "../app/UserCard";

function Users({ users, onDelete }) {
  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-30">
      <div className="flex justify-end p-6">
        <button className="border-2 border-accent text-accent  p-2 rounded-md">
          Add New User
        </button>
      </div>
      <div className="grid grid-cols-12 gap-10 ">
        {users.map((user) => (
          <UserCard
            key={user.id}
            {...user}
            onDelete={onDelete}
            classes="lg:col-span-4 md:col-span-6 col-span-12 w-full"
          />
        ))}
      </div>
    </div>
  );
}

export default Users;
