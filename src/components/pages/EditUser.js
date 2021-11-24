import React from "react";
import { useNavigate } from "react-router";
import Form from "../common/Form";

const validateEmail =
  // eslint-disable-next-line
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function EditUser({ onUpdate }) {
  const validator = (user) => {
    const errors = {};
    if (!user.name) {
      errors.name = "User name is required";
    } else if (user.name.length < 8) {
      errors.name = "minimum 8 characters required";
    } else if (!user.email) {
      errors.email = "Email is required";
    } else if (!validateEmail.test(user.email)) {
      errors.email = "Email is Not Valid";
    } else if (!user.phone) {
      errors.phone = "Phone is required";
    } else if (!/[0-9]+/i.test(user.phone)) {
      errors.phone = "Invalid digit";
    } else if (user.phone.length !== 10) {
      errors.phone = "Phone Number sould contain 10 digits";
    } else if (!user.location) {
      errors.location = "Location is required";
    }
    return errors;
  };
  const handleSubmit = (user) => {
    onUpdate(user);
  };

  const navigate = useNavigate();

  const handleCancel = (user) => {
    navigate("/users");
  };
  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      validator={validator}
      initialValue={{
        name: "",
        email: "",
        phone: "",
        location: "",
      }}
      fields={[
        { label: "Name", field: "name" },
        { label: "Email ID", field: "email" },
        { label: "Phone No", field: "phone" },
        { label: "Location", field: "location" },
      ]}
      title="Edit User"
      submitText="Edit"
    />
  );
}

export default EditUser;
