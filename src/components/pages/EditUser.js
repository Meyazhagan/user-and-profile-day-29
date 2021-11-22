import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  location: Joi.string().required(),
});

function EditUser() {
  return (
    <Form
      schema={schema}
      initialValue={{
        name: "",
        email: "",
        phone: "",
        location: "",
      }}
      fields={[
        { label: "Name", field: "name" },
        { label: "email", field: "email" },
        { label: "phone", field: "phone", type: "number" },
        { label: "location", field: "location" },
      ]}
      title="Edit User"
    />
  );
}

export default EditUser;
