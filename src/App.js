import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserData from "./Data/UserServices";
import NavBar from "./components/app/NavBar";
import Profiles from "./components/pages/Profiles";
import Users from "./components/pages/Users";
import CreateUser from "./components/pages/CreateUser";
import CreateProfile from "./components/pages/CreateProfile";
import EditProfile from "./components/pages/EditProfile";
import EditUser from "./components/pages/EditUser";
import Home from "./components/pages/Home";
import ToastMessage from "./components/common/Toast";
import About from "./components/pages/About";

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
    toast.success(
      <ToastMessage
        messaage={"Created The User"}
        onUndo={() => setUsers(prevUsers)}
      />
    );
  };
  const handleUpdateUser = (id, user) => {
    const prevUsers = users;
    const newUsers = [...users];
    const index = newUsers.findIndex((u) => u.id === id);
    newUsers[index] = { ...newUsers[index], ...user };
    setUsers(newUsers);
    toast.info(
      <ToastMessage
        messaage={"Updated The User"}
        onUndo={() => setUsers(prevUsers)}
      />
    );
  };
  const handleDeleteUser = (id, message) => {
    const prevUsers = users;
    const newUsers = [...users];
    const index = newUsers.findIndex((u) => u.id === id);
    newUsers.splice(index, 1);
    setUsers(newUsers);
    UserData.update(newUsers);
    toast.error(
      <ToastMessage
        messaage={"Deleted The User"}
        onUndo={() => setUsers(prevUsers)}
      />
    );
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
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
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
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
