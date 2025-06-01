import { addGlobalState, triggerModal } from "@/redux/globalStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddWidget = () => {
  const [selected, setSelected] = useState("CSPM");
  const [show, setShow] = useState(false);
  const state = useSelector((state) => state.store);
  const [form, setForm] = useState({
    widgetName: "",
    widgetText: "",
  });
  const dispatch = useDispatch();
  const category = ["CSPM", "CWPP", "Image", "Ticket"];
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const closeModal = () => {
    dispatch(triggerModal(false));
    setShow(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (form.widgetName && form.widgetText) {
      const payload = {
        [selected]: [...(state.globalState[selected] || []), form],
      };
      dispatch(addGlobalState(payload));
      setForm({
        widgetName: "",
        widgetText: "",
      });
      closeModal(); // Close modal after submit
      return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-30"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
    >
      <div
        className={`md:w-[480px] w-[95vw] rounded-2xl shadow-2xl bg-white transition-all duration-300 transform ${
          show ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-6 bg-blue-700 text-white py-4 rounded-t-2xl">
          <h1 className="text-lg font-semibold">Add Widget</h1>
          <span
            className="cursor-pointer text-xl hover:text-red-300 transition"
            onClick={closeModal}
            title="Close"
          >
            ×
          </span>
        </div>
        <div className="p-6">
          <h2 className="text-base font-medium text-gray-700 mb-2">
            Personalize your dashboard by adding the following widgets
          </h2>
          <ul className="flex gap-3 mb-4">
            {category?.map((el) => (
              <li
                key={el}
                onClick={() => setSelected(el)}
                className={`px-3 py-1 rounded-lg cursor-pointer transition font-medium ${
                  selected === el
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {el}
              </li>
            ))}
          </ul>
          <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
            <input
              placeholder="Widget Name"
              className="w-full outline-none border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 transition"
              onChange={onInputChange}
              name="widgetName"
              value={form.widgetName}
              autoComplete="off"
            />
            <input
              placeholder="Widget Text"
              className="w-full outline-none border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 transition"
              onChange={onInputChange}
              name="widgetText"
              value={form.widgetText}
              autoComplete="off"
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                className="border border-gray-400 px-6 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;