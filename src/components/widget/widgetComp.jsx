import { triggerModal, updateGlobalState } from "@/redux/globalStore";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
const WidgetComp = ({ widgetName, widgetText, widgetType, category }) => {
  const globalState = useSelector((state) => state.store.globalState);
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(triggerModal(true));
  };
  const deleteMethod = () => {
    if (globalState[category]) {
      let data = globalState[category]?.filter(
        (el) => el?.widgetName !== widgetName
      );
      let payload = {
        ...globalState,
        [category]: data,
      };
      dispatch(updateGlobalState(payload));
    }
  };
  return (
    <div
      className={`md:min-w-[400px] w-full h-[200px] rounded-2xl shadow-md transition-all duration-200 ${
        widgetType
          ? "bg-white border border-gray-200 hover:shadow-lg"
          : "bg-gradient-to-br from-blue-50 to-gray-100 border-2 border-dashed border-blue-200"
      }`}
    >
      {widgetType ? (
        <div className="px-5 py-4 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl text-gray-800 truncate">
              {widgetName && widgetName}
            </h1>
            <span
              className="p-2 hover:cursor-pointer bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors duration-150 shadow"
              onClick={deleteMethod}
              title="Delete widget"
            >
              <MdDelete size={22} />
            </span>
          </div>
          <div className="flex justify-center items-center flex-1">
            <p className="text-gray-700 text-lg text-center">{widgetText && widgetText}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <button
            className="border-2 border-blue-400 bg-white py-2 px-5 rounded-xl text-blue-700 font-semibold shadow hover:bg-blue-50 hover:border-blue-600 transition-all duration-150"
            onClick={handleModal}
          >
            <span className="flex items-center gap-2 text-base">
              <AiOutlinePlus size={20} /> <span>Add Widget</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WidgetComp;