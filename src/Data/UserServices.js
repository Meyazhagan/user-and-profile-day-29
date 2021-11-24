import Users from "./User.json";

const getALl = () => {
  //   const a = localStorage.getItem("users");
  //   if (!a || (a && JSON.parse(a).length < 0)) {
  //     localStorage.setItem("users", JSON.stringify(Users));
  //     return Users;
  //   }
  //   console.log(JSON.parse(a));
  return Users;
};

const methods = {
  getALl,
};
export default methods;
