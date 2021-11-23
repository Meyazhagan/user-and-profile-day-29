import React, { useState } from "react";

// const Input = ({ id, label, value, error, ...rest }) => {
//   return (
//     <div className="flex">
//       <label htmlFor={id} className="">
//         {label}
//       </label>
//       <input type="text" className="" id={id} value={value} {...rest} />
//     </div>
//   );
// };

function Form({ initialValue, fields = [], title, schema }) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleValueChange = (e) => {
    const newValue = { ...value };
    newValue[e.target.name] = e.target.value;
    const { error } = schema.validate(newValue);
    error ? setError(error) : setError(null);
    console.log(error);
    setValue(newValue);
  };
  // console.log(schema.validate({}));
  return (
    <form className="grid grid-cols-8 bg-alpha p-4 rounded-md max-w-md mx-4 md:mx-auto items-center gap-4">
      <div className="col-span-full text-center mb-4">{title}</div>
      {error && (
        <div className="col-span-full bg-red-400 mb-3 p-3 rounded-md">
          {error.message}
        </div>
      )}
      {fields.map(({ field, label, ...rest }) => (
        <>
          <label htmlFor={field} className="col-span-3">
            {label}
          </label>
          <input
            type="text"
            onChange={handleValueChange}
            {...rest}
            value={value[field]}
            id={field}
            name={field}
            className="appearance-none bg-alpha col-span-5 rounded-md py-2 px-4 focus:ring-2 ring-accent border-0 outline-none"
          />
        </>
      ))}
    </form>
  );
}

export default Form;
