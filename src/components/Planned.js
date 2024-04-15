import React from "react";
import { useNavigate } from "react-router-dom";
import { CAretDown, DeleteIcon, Down, Options } from "../icons/icons";
// import { TasksData } from "../data/data";

const Planned = ({ plannedTasks, deleteTask, handleChange }) => {
  const navigate = useNavigate();
  function cheeckTopics(e) {
    const tasksarray = [];
    if (e.Document == true) tasksarray.push("Document");
    if (e.Event == true) tasksarray.push("Event");
    if (e.Internal == true) tasksarray.push("Internal");
    if (e.Marketing == true) tasksarray.push("Marketing");
    if (e.Urgent == true) tasksarray.push("Urgent");
    if (e.Report == true) tasksarray.push("Report");
    return tasksarray;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center ">
        <Options />
        <h1 className="text-2xl font-semibold flex items-center gap-3">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>Planned
          Tasks
        </h1>
        <p className="text-xs">
          {plannedTasks.PlannedTasks.length} Opened Tasks
        </p>
      </div>
      <button
        className="w-full bg-gray-300 rounded p-2 text-center text-gray-500 shadow-2xl hover:bg-gray-200"
        onClick={() => navigate("/form/PlannedTasks")}
      >
        + Create Task
      </button>
      <div className="flex flex-col gap-2 w-full text-xs">
        {plannedTasks.PlannedTasks.map((e) => (
          <div className="flex flex-col gap-5 w-full border-2 rounded p-3 flex-wrap shadow-2xl" key={e.id}>
            <div
              className="flex justify-between flex-col lg:flex-row gap-2 lg:gap-0"
              key={e.title}
            >
              <div className="flex gap-3 h-auto lg:w-3/4 items-center justify-center lg:justify-start">
                <input
                  type="checkbox"
                  checked={e.checked}
                  onChange={() => handleChange(e.id, "PlannedTasks")}
                ></input>
                <p className="font-semibold">{e.title}</p>
              </div>
              <div className="w-full flex  gap-3 lg:gap-0 items-center justify-between  flex-wrap ">
                <p className="flex items-start text-gray-500 ">
                  Due Date {e["Due At"]}
                </p>
                <div className="flex gap-5 flex-wrap lg:flex-nowrap mx-10">
                  <>
                    {cheeckTopics(e.topics).map((e) => (
                      <p
                        key={e}
                        className={`${
                          e == "Internal" && "bg-orange-200 text-orange-600"
                        } ${
                          e == "Marketing" && "bg-yellow-200 text-yellow-600"
                        } ${e == "Urgent" && "bg-red-200 text-red-600"}
                            } ${e == "Report" && "bg-green-200 text-green-600"}
                            } ${e == "Document" && "bg-blue-200 text-blue-600"}
                            } ${e == "Event" && "bg-purple-200 text-purple-600"}
                              
                         rounded-full p-1 min-w-16 text-xs  text-center`}
                      >
                        {e}
                      </p>
                    ))}
                  </>
                </div>
              </div>
              <div className="flex justify-between  items-center gap-3">
                <p>people</p>
                <p onClick={() => deleteTask(e.id, "PlannedTasks")}>
                  <DeleteIcon />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planned;
