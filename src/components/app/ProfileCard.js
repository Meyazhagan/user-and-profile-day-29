import React from "react";

function ProfileCard() {
  return (
    <div className="max-w-sm lg:max-w-none grid grid-cols-6 lg:grid-cols-10 gap-5 bg-alpha rounded-xl p-6 lg:p-4 lg:gap-0 lg:mx-5 lg:place-content-center">
      <div className="col-span-2 lg:col-span-1 lg:self-center">
        <img
          src="/images/resized.jpg"
          className="h-24 w-24 object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="lg:justify-self-start p-4 col-span-4 lg:col-span-3 ">
        <div className="text-xl text-center uppercase text-light font-bold  truncate">
          Meyazhagan
        </div>
        <div className="text-accent font-extralight text-center text-xs truncate">
          meyazhagan.ofcl@gmail.com
        </div>
      </div>
      <div className="mt-3 col-span-3 lg:col-span-2">
        <div className="text-xl uppercase text-light font-bold ">Skill</div>
        <div className="flex mt-2 w-44 flex-wrap">
          <div className="text-accent m-1 text-xs border-2 uppercase border-accent rounded-md py-1 px-3 w-min">
            HTML
          </div>
          <div className="text-accent m-1 text-xs border-2 uppercase border-accent rounded-md py-1 px-3 w-min">
            Css
          </div>
        </div>
      </div>
      <div className="mt-3 col-span-3  lg:col-span-2">
        <div className="text-xl uppercase text-light font-bold ">Role</div>
        <div className="flex flex-wrap mt-2">
          <div className="text-accent m-1 text-xs border-2 uppercase border-accent rounded-md py-1 px-3 w-min">
            Student
          </div>
          <div className="text-accent m-1 text-xs border-2 uppercase border-accent rounded-md py-1 px-3 w-min">
            Student
          </div>
          <div className="text-accent m-1 text-xs border-2 uppercase border-accent rounded-md py-1 px-3 w-min">
            Student
          </div>
        </div>
      </div>
      <div className="col-span-6 flex justify-around items-center mt-4 lg:mt-0 lg:col-span-2">
        <button className="icon-btn p-4 mx-auto">
          <img src="/icons/edit.svg" alt="" />
        </button>
        <button className="icon-btn p-4 mx-auto">
          <img src="/icons/delete.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
