import React from "react";

function SelectFrom({ selectList, submitText, initialValue }) {
  return (
    <form className="w-5/6 lg:w-4/6  mx-auto">
      <Select
        label="Skill"
        listItems={skillOptions}
        multiple={true}
        onChange={(e, selected) => setSelected(selected)}
      />
      {errors[field] && <div className="text-red-400">{errors[field]}</div>}
      <div className="flex justify-end gap-6 mr-6">
        <button
          // onClick={(e) => handleCancel(e)}
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
          // onClick={(e) => handleSubmit(e)}
          className={classNames(
            `text-green-500 border-2 border-green-500 
            rounded-md px-4 py-1
          hover:bg-green-500 hover:text-white
          focus:bg-green-500 focus:text-white`
            // { " opacity-70 cursor-not-allowed ": !isValid }
          )}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default SelectFrom;
