import Users from "./User.json";

const USER_KEY = "users";

const getALl = () => {
  const USER_VALUE = localStorage.getItem(USER_KEY);
  if (!USER_VALUE || (USER_VALUE && JSON.parse(USER_VALUE).length < 1)) {
    localStorage.setItem(USER_KEY, JSON.stringify(Users));
    return Users;
  }
  return JSON.parse(USER_VALUE);
};

const update = (updatedUser) => {
  localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
};

const methods = {
  getALl,
  update,
};
export default methods;
