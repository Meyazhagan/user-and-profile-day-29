import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Properity = ({ list }) => {};

const IconButton = ({ src, tooltip, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-alpha rounded-md p-4 group relative"
    >
      <img src={src} alt="" />
      <span className="hidden group-hover:block absolute bg-gray-900 top-full left-full w-max px-2 rounded">
        {tooltip}
      </span>
    </button>
  );
};

function UserCard(props) {
  const { name, email, id, avatar, onDelete, phone, location, classes } = props;

  const [liked, setLiked] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  return (
    <div className={classes}>
      <section className="bg-alpha p-3 rounded-2xl h-full">
        <div className="flex">
          <img
            src={"/images/resized.jpg"}
            className="h-40 w-40 rounded-xl shadow object-cover "
            alt={name}
          />
          <div className="flex flex-col mx-auto justify-evenly flex-shrink-0 ">
            <IconButton
              src={`/icons/heart-${liked ? "filled" : "outlined"}.svg`}
              onClick={() => {
                setLiked((l) => !l);
              }}
              tooltip={!liked ? "Like" : "Unlike"}
            />
            <IconButton
              src={"/icons/profile.svg"}
              onClick={() => navigate(`/profile/${id}`)}
              tooltip="View Profile"
            />
          </div>
        </div>
        <div className="text-light uppercase mt-8 mb-4 ml-3 text-2xl font-bold tracking-wide break-words ">
          {name}
        </div>
        <div className="grid grid-cols-8 gap-2 ml-3">
          <div className="col-span-1">
            <img src="/icons/mail.svg" alt={email} />
          </div>
          <div className="text-accent break-words truncate col-span-7">
            {email}
          </div>
          <div className="col-span-1">
            <img src="/icons/phone.svg" alt={phone} />
          </div>
          <div className="text-accent col-span-7">{phone}</div>
          <div className="col-span-1">
            <img src="/icons/pin.svg" alt={location} />
          </div>
          <div className="text-accent  col-span-7 capitalize">{location}</div>
        </div>
        <div className="flex justify-around mt-4">
          <IconButton
            src={"/icons/edit.svg"}
            onClick={() => navigate(`/edit-user/${id}`)}
            tooltip="Edit"
          />
          <IconButton
            src={"/icons/delete.svg"}
            onClick={() => onDelete(id)}
            tooltip="Delete"
          />
        </div>
      </section>
    </div>
  );
}

export default UserCard;
