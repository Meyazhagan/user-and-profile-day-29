import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import UserData from "./Data/User";
import NavBar from "./components/app/NavBar";
import Profiles from "./components/pages/Profiles";
import Users from "./components/pages/Users";
import CreateUser from "./components/pages/CreateUser";
import CreateProfile from "./components/pages/CreateProfile";
import EditProfile from "./components/pages/EditProfile";
import EditUser from "./components/pages/EditUser";
import Home from "./components/pages/Home";

function App() {
  const [users, setUsers] = useState([]);
  const getALlUser = async () => {
    const users = await UserData.getALl();
    setUsers(users);
  };

  // const getUser = async (id) => {
  //   const user = await UserData.get(id);
  //   return user;
  // };

  const handleCreateUser = async (newUser) => {
    const prevUsers = users;
    try {
      const newUsers = [newUser, ...users];
      setUsers(newUsers);
      await UserData.create(newUser);
    } catch (err) {
      // const message = "Cannot add users";
      setUsers(prevUsers);
    }
  };
  const handleUpdateUser = async (id, user) => {
    const prevUsers = users;
    try {
      const newUsers = [...users];
      const index = newUsers.findIndex((u) => u.id === id);
      newUsers[index] = user;
      setUsers(newUsers);
      // const res =
      await UserData.update(id, user);
    } catch (err) {
      // const message = "Cannot update users";
      setUsers(prevUsers);
    }
  };
  const handleDeleteUser = async (id, user) => {
    const prevUsers = users;
    try {
      const newUsers = [...users];
      const index = newUsers.findIndex((u) => u.id === id);
      newUsers.splice(index, 1);
      setUsers(newUsers);
      // const res =
      await UserData.delete(id, user);
    } catch (err) {
      // const message = "Cannot delete users";
      setUsers(prevUsers);
    }
  };
  const handleCreateProfile = async (userId, newProfile) => {
    const prevUsers = users;
    try {
      const newUsers = [...users];
      const index = newUsers.findIndex((u) => u.id === userId);
      const newUser = newUsers[index]?.profiles?.push(newProfile);
      setUsers(newUsers);
      // const res =
      await UserData.update(userId, newUser);
    } catch (err) {
      // const message = "Cannot delete users";
      setUsers(prevUsers);
    }
  };
  const handleUpdateProfile = (userId, profile) => {};
  const handleDeleteProfile = (userId) => {};
  useEffect(() => {
    getALlUser();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="py-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/:userId"
            element={<Profiles users={users} onDelete={handleDeleteProfile} />}
          />
          <Route
            path="/users"
            element={<Users users={users} onDelete={handleDeleteUser} />}
          />
          <Route
            path="create-user"
            element={<CreateUser onCreate={handleCreateUser} />}
          />
          <Route
            path="edit-user/:id"
            element={<EditUser onUpdate={handleUpdateUser} />}
          />
          <Route
            path="create-profile"
            element={<CreateProfile onCreate={handleCreateProfile} />}
          />
          <Route
            path="edit-profile/:id"
            element={<EditProfile onUpdate={handleUpdateProfile} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
