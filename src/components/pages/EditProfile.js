import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  location: Joi.string().required(),
});
function EditProfile() {
  return (
    <Form schema={schema} initialValue={{}} fields={[]} title="Edit User" />
  );
}

export default EditProfile;
