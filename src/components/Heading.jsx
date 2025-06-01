import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { triggerModal } from "@/redux/globalStore";

const Heading = () => {
  const dispatch = useDispatch();
  return (
    <div className="md:flex justify-between items-center bg-gradient-to-r from-gray-50 to-white px-6 py-4 rounded-lg shadow-sm">
      <h1 className="font-bold text-3xl mb-4 md:mb-0 text-gray-800 tracking-tight">
        CNAPP Dashboard
      </h1>
      <div className="flex gap-4 items-center justify-end md:justify-normal">
        <button
          className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 shadow hover:bg-blue-700 transition-colors duration-150"
          onClick={() => dispatch(triggerModal(true))}
        >
          <span className="font-medium">Add widget</span> <AiOutlinePlus size={20} />
        </button>
        <button className="bg-white rounded-lg p-2 shadow hover:bg-gray-100 transition-colors duration-150">
          <LuRefreshCw size={20} className="text-gray-600" />
        </button>
        <button className="bg-white p-2 rounded-lg shadow hover:bg-gray-100 transition-colors duration-150">
          <BsThreeDotsVertical size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Heading;