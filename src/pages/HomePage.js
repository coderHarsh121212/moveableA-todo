import React, { useEffect, useState } from "react";
import CompleteTasks from "../components/CompleteTasks";
import Planned from "../components/Planned";
import UpcomingTasks from "../components/UpcomingTasks";
import { TasksData } from "../data/data";

const HomePage = () => {
  const [plannedTasks, setPlannedTasks] = useState(TasksData);
  const [CompleteTasks1, setCompleteTasks] = useState(TasksData.CompleteTasks);
  function deleteTask(id, taskname) {
    if (taskname == "PlannedTasks") {
      const filteredTasks = plannedTasks.PlannedTasks.filter(
        (task) => task.id !== id
      );
      setPlannedTasks({ ...plannedTasks, PlannedTasks: filteredTasks });
    }
    if (taskname == "upcomingTasks") {
      const filteredTasks = plannedTasks.UpcomigTasks.filter(
        (task) => task.id !== id
      );
      setPlannedTasks({ ...plannedTasks, UpcomigTasks: filteredTasks });
    }
    if (taskname == "c") {
      const filteredTasks = plannedTasks.CompleteTasks.filter(
        (task) => task.id !== id
      );
      setPlannedTasks({ ...plannedTasks, CompleteTasks: filteredTasks });
    }
  }

  function handleChange(id, taskname) {
    if (taskname == "PlannedTasks") {
      const unfilteredTask = plannedTasks.PlannedTasks.find(
        (task) => task.id === id
      );
      setPlannedTasks((prevState) => ({
        ...prevState,
        PlannedTasks: prevState.PlannedTasks.filter((task) => task.id !== id),
      }));
      setCompleteTasks((prevState) => [
        ...prevState,
        { ...unfilteredTask, checked: true },
      ]);
    }
    if (taskname == "upcomingTasks") {
      const unfilteredTask = plannedTasks.UpcomigTasks.find(
        (task) => task.id === id
      );
      setPlannedTasks((prevState) => ({
        ...prevState,
        UpcomigTasks: prevState.UpcomigTasks.filter((task) => task.id !== id),
      }));
      setCompleteTasks((prevState) => [
        ...prevState,
        { ...unfilteredTask, checked: true },
      ]);
    }
  }
  useEffect(() => {
    setPlannedTasks(plannedTasks);
  }, [plannedTasks]);
  return (
    <div className="flex flex-col gap-3  w-full">
      <div className="flex justify-between items-center py-2 pr-8 shadow-2xl flex-col  sm:flex-row">
        <div className="flex gap-10 items-center ">
          <div className="flex items-center gap-10 pl-20">
            <p className="font-semibold text-2xl">Task</p>
            <p className="border-b-2 border-black">Lists</p>
          </div>
        </div>
        <div className="gap-4 flex pl-12 lg:pl-0">
          <div className="flex gap-4 border-r-2  px-4">
            <p className="sm:px-4 border-2 border-black rounded py-[2px] cursor-pointer px-1 text-xs lg:px-3 lg:text-lg md:text-base sm:text-sm hover:bg-gray-200">
              Sort By
            </p>
            <p className="sm:px-4 border-2 border-black rounded py-[2px] cursor-pointer px-1 text-xs lg:px-3 lg:text-lg md:text-base sm:text-sm hover:bg-gray-200">
              Filter
            </p>
          </div>
          <p className="sm:px-4 border-2 border-black rounded py-[2px] bg-black text-white cursor-pointer px-1 text-xs lg:px-3 lg:text-lg md:text-base sm:text-sm hover:bg-gray-200 hover:text-black">
            Add Task
          </p>
        </div>
      </div>
      <div className="pl-14 pr-1">
        <Planned
          plannedTasks={plannedTasks}
          deleteTask={deleteTask}
          handleChange={handleChange}
        />
      </div>
      <div className="my-5 pl-14 pr-1">
        <UpcomingTasks
          plannedTasks={plannedTasks}
          deleteTask={deleteTask}
          handleChange={handleChange}
        />
      </div>
      <div className="pl-14 pr-1">
        <CompleteTasks plannedTasks={CompleteTasks1} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default HomePage;
