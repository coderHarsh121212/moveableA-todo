import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksData } from "../../data/data";

const FormComponent = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const [plannedTasks, setPlannedTasks] = useState(TasksData);
  const { id } = useParams();
  const paramsidx = id;
  const navigate = useNavigate();
  const [checkboxValues, setCheckboxValues] = useState({
    title: "",
    "Due At": `${new Date().getDate()} ${
      monthNames[(new Date().getMonth() )]
    } ${new Date().getFullYear()}`,
    topics: {
      Internal: false,
      Marketing: false,
      Urgent: false,
      Event: false,
      Document: false,
      Report: false,
    },
  });

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      topics: { ...prevValues.topics, [name]: checked },

      [name]: value,
    }));
  };

  const handleSubmit = (e, idx) => {
    e.preventDefault();
    setPlannedTasks(plannedTasks[idx].push(checkboxValues));
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto ">
      <h2 className="text-2xl font-bold my-4">Edit Tasks</h2>
      <form
        onSubmit={(e) => handleSubmit(e, paramsidx)}
        className="border-4  shadow-2xl rounded bg-slate-200"
      >
        <div className="px-4 py-1">
          <input
            className="w-full p-2 outline-none border-2 rounded "
            placeholder="Title"
            id="inputBox"
            name="title"
            checked={checkboxValues.title}
            onChange={handleCheckboxChange}
          ></input>
        </div>

        <h1 className="border-t-2 border-black mt-3 px-4 py-1">
          Select Topics:
        </h1>
        <div className=" flex gap-6 items-center  justify-between px-4">
          <label htmlFor="checkbox1">
            <li>Internal</li>
          </label>
          <input
            type="checkbox"
            id="checkbox1"
            name="Internal"
            checked={checkboxValues.topics.Internal}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className=" flex gap-6 items-center justify-between px-4">
          <label htmlFor="checkbox2">
            <li>Marketing</li>
          </label>
          <input
            type="checkbox"
            id="checkbox2"
            name="Marketing"
            checked={checkboxValues.topics.Marketing}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className=" flex gap-6 items-center justify-between px-4">
          <label htmlFor="checkbox3">
            <li>Urgent</li>
          </label>
          <input
            type="checkbox"
            id="checkbox3"
            name="Urgent"
            checked={checkboxValues.topics.Urgent}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className=" flex gap-6 items-center justify-between px-4">
          <label htmlFor="checkbox4">
            <li>Event</li>
          </label>
          <input
            type="checkbox"
            id="checkbox4"
            name="Event"
            checked={checkboxValues.topics.Event}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className=" flex gap-6 items-center justify-between px-4">
          <label htmlFor="checkbox3">
            <li>Document</li>
          </label>
          <input
            type="checkbox"
            id="checkbox5"
            name="Document"
            checked={checkboxValues.topics.Document}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className=" flex gap-6 items-center justify-between px-4">
          <label htmlFor="checkbox3">
            <li>Report</li>
          </label>
          <input
            type="checkbox"
            id="checkbox6"
            name="Report"
            checked={checkboxValues.topics.Report}
            onChange={handleCheckboxChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
