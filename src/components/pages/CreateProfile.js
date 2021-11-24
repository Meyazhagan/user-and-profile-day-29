import classNames from "classnames";
import React, { useState } from "react";
import Select from "../common/Select";

const skillOptions = [
  "HTML",
  "CSS",
  "JS",
  "REACT",
  "NODE JS",
  "EXPRESS",
  "MONGODB",
  "MONGOOSE",
  "MYSQL",
  "AWS",
];
const roleOptions = ["STUDENT", "MENTOR", "EVENT MANAGER", "PLACEMENT TEAM"];

function CreateProfile() {
  const [profile, setProfile] = useState([]);

  return (
    <div className="w-md">
      <SelectForm 
        selectList={[{label:"Skill", multiple:true, listItems:skillOptions}, 
        {label:"Skill", multiple:true, listItems:skillOptions}]} 
        submitText={} 
        initialValue={} 
        validator={}/>
    </div>
  );
}

export default CreateProfile;
