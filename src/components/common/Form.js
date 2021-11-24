import React, { useState } from "react";

function Form(props) {
  const {
    initialValue,
    fields = [],
    title,
    validator,
    submitText,
    onSubmit,
    onCancel,
  } = props;
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleValueChange = (e) => {
    const newValue = { ...value };
    newValue[e.target.name] = e.target.value;
    validateValue(newValue);
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };
  const validateValue = (value) => {
    const error = validator(value);
    setErrors(error);
  };
  // console.log(schema.validate({}));
  return (
    <form className="grid grid-cols-8 bg-alpha p-4 rounded-md max-w-md mx-4 md:mx-auto items-center gap-4">
      <div className="col-span-full text-center mb-4">{title}</div>
      {/* {errors && (
       
      )} */}
      {fields.map(({ field, label, ...rest }, index) => (
        <React.Fragment key={index}>
          <label htmlFor={field} className="col-span-3">
            {label}
          </label>
          <div className="col-span-5">
            <input
              type="text"
              onChange={handleValueChange}
              {...rest}
              value={value[field]}
              id={field}
              name={field}
              className="appearance-none bg-alpha  rounded-md py-2 px-4 focus:ring-2 ring-accent border-0 outline-none"
            />
            {errors[field] && (
              <div className="text-red-400">{errors[field]}</div>
            )}
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-full">
        <div className="flex justify-end gap-6 mr-6">
          <button
            onClick={(e) => handleCancel(e)}
            className="text-red-500
            border-2
            border-transparent
            rounded-md px-4 py-1
            hover:border-red-500
            focus:border-red-500"
          >
            Cancel
          </button>
          <button
            onClick={(e) => handleSubmit(e)}
            className="text-green-500 border-2 border-green-500 
            rounded-md px-4 py-1
            hover:bg-green-500 hover:text-white
            focus:bg-green-500 focus:text-white"
          >
            {submitText}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
