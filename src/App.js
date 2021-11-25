import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { snackbar } from "tailwind-toast";

import UserData from "./Data/UserServices";
import NavBar from "./components/app/NavBar";
import Profiles from "./components/pages/Profiles";
import Users from "./components/pages/Users";
import CreateUser from "./components/pages/CreateUser";
import CreateProfile from "./components/pages/CreateProfile";
import EditProfile from "./components/pages/EditProfile";
import EditUser from "./components/pages/EditUser";
import Home from "./components/pages/Home";

const toastProps = (color) => {
  return {
    color: `bg-${color}`,
    positionX: "end",
    positionY: "top",
    duration: 4000,
    speed: 500,
    // fontColor: "gray",
    // fontTone: 900,
  };
};

function App() {
  const [users, setUsers] = useState([]);
  const getALlUser = () => {
    const users = UserData.getALl();
    setUsers(users);
  };

  const getUser = (id) => {
    const index = users.findIndex((u) => u.id === id);
    return { ...users[index] };
  };

  const handleCreateUser = (newUser) => {
    const prevUsers = users;
    const addInfo = {
      id: UserData.genId().next().value,
      skill: [],
      profile: [],
    };
    const newUsers = [{ ...addInfo, ...newUser }, ...users];
    setUsers(newUsers);
    UserData.update(newUsers);
    snackbar()
      .success("Hey!", "You successfully Create the User!")
      .with(toastProps("green-500"))
      .addButtons({
        undo: () => {
          setUsers(prevUsers);
        },
      })
      .show();
  };
  const handleUpdateUser = (id, user) => {
    const prevUsers = users;
    const newUsers = [...users];
    const index = newUsers.findIndex((u) => u.id === id);
    newUsers[index] = { ...newUsers[index], ...user };
    setUsers(newUsers);
    UserData.update(newUsers);
    snackbar()
      .warning("Hey!", "You successfully updated the User!")
      .with(toastProps("green-500"))
      .addButtons({
        undo: () => {
          setUsers(prevUsers);
        },
      })
      .show();
  };
  const handleDeleteUser = (id) => {
    const prevUsers = users;
    const newUsers = [...users];
    const index = newUsers.findIndex((u) => u.id === id);
    newUsers.splice(index, 1);
    setUsers(newUsers);
    UserData.update(newUsers);
    snackbar()
      .danger("Hey!", "You successfully deleted the User!")
      .with(toastProps("red-500"))
      .addButtons({
        undo: () => {
          setUsers(prevUsers);
        },
      })
      .show();
  };
  const handleCreateProfile = (userId, newProfile) => {
    handleUpdateUser(userId, newProfile);
  };
  const handleUpdateProfile = (userId, profile) => {
    handleUpdateUser(userId, profile);
  };
  const handleDeleteProfile = (userId) => {
    handleUpdateUser(userId, { skill: [], role: [] });
  };
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
            element={
              <Profiles onDelete={handleDeleteProfile} getUser={getUser} />
            }
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
            element={<EditUser onUpdate={handleUpdateUser} getUser={getUser} />}
          />
          <Route
            path="create-profile/:userId"
            element={
              <CreateProfile onCreate={handleCreateProfile} getUser={getUser} />
            }
          />
          <Route
            path="edit-profile/:userId"
            element={
              <EditProfile onUpdate={handleUpdateProfile} getUser={getUser} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
