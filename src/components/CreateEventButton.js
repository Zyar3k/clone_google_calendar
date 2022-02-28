import React from "react";
import plusImg from "../assets/plus.svg";

const CreateEventButton = () => {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={plusImg} alt="plus_icon" className="w-7 h-7" />
      <span className="pl-3pr-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
