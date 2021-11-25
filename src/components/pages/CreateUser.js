import React from "react";
import { useNavigate } from "react-router";
import Form from "../common/Form";
import { validator } from "../../Data/UserValidator";

function CreateUser({ onCreate }) {
  const handleSubmit = (user) => {
    onCreate(user);
    navigate("/users");
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/users");
  };
  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      validator={validator}
      initialValue={{
        avatar: "",
        name: "",
        email: "",
        phone: "",
        location: "",
      }}
      fields={[
        { label: "Name", field: "name" },
        { label: "Avatar", field: "avatar" },
        { label: "Email ID", field: "email" },
        { label: "Phone No", field: "phone" },
        { label: "Location", field: "location" },
      ]}
      title="Create User"
      submitText="Create"
    />
  );
}

export default CreateUser;
