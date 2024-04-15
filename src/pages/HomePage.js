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
    if (taskname == "completeTasks") {
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
    plannedTasks;
  }, [plannedTasks]);
  return (
    <div className="flex flex-col gap-3 pl-72 ">
      <div className="flex justify-between items-center py-2 pr-8 shadow-2xl">
        <div className="flex gap-10 items-center">
          <p className="font-semibold text-2xl">Task</p>
          <p>Lists</p>
        </div>
        <div className="gap-4 flex">
          <div className="flex gap-4 border-r-2  px-4">
            <p className="px-4 border-2 border-black rounded py-[2px] cursor-pointer">
              Sort By
            </p>
            <p className="px-4 border-2 border-black rounded py-[2px] cursor-pointer">
              Filter
            </p>
          </div>
          <p className="px-4 border-2 border-black rounded py-[2px] bg-black text-white cursor-pointer">
            Add Task
          </p>
        </div>
      </div>
      <div>
        <Planned
          plannedTasks={plannedTasks}
          deleteTask={deleteTask}
          handleChange={handleChange}
        />
      </div>
      <div className="my-5">
        <UpcomingTasks
          plannedTasks={plannedTasks}
          deleteTask={deleteTask}
          handleChange={handleChange}
        />
      </div>
      <div>
        <CompleteTasks plannedTasks={CompleteTasks1} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default HomePage;
