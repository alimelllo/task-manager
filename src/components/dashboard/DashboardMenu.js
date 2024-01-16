import { useNavigate } from "react-router-dom";
import TaskItem from "./taskitem/TaskItem";
import { createTask } from "../../Redux/Reducers/Settings/Profile/TaskReducers.ts";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DashboardMenu = () => {
  let navigate = useNavigate();

  const tasks = useSelector(createTask).payload.TaskReducers.tasks;
  // scroll to the top of the document
  //==========================================================
  let mybutton = document.getElementById("myBtn");

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    scrollFunction();
  };
  //============================================================
  //============================================================
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <div
      className="flex justify-center box-border flex-col mx-auto w-[95%] apearanimation sm:w-full relative "
      id="maincontainer"
    >
      <div className="DASHBOARD_HEADER h-[5rem] flex flex-row items-center justify-between text-white border-b-[1px] border-[#545454] mb-2">
        <div className="my-auto flex flex-row">
          <span className="h-[0.75rem] w-[0.75rem] sm:w-[0.5rem] sm:h-[0.5rem] bg-[#45ee45] m-auto rounded-[50%] mx-[0.5rem] "></span>
          <p className="text-[2rem] font-[600] sm:text-[1rem] tracking-[1px]">
            Task Manager
          </p>
        </div>
        {
          <div className="flex flex-row items-center">
            <div
              onClick={() => navigate("/Create")}
              className="ADD_ORDER flex items-center justify-center h-[3rem] bg-[#413846] apearanimation p-[0.5rem] mr-1 rounded-[15px] boxshadow2 transition-all cursor-pointer hover:bg-[#554a5c] sm:text-[0.75rem] "
            >
              {" "}
              + Create{" "}
            </div>

            <div
              onClick={() => {
                localStorage.removeItem("userName");
                localStorage.removeItem("password");
                navigate("/");
              }}
              className="ADD_ORDER flex items-center justify-center h-[3rem] bg-[#413846] apearanimation p-[0.5rem] md:mr-1 rounded-[15px] boxshadow2 transition-all cursor-pointer hover:bg-[#554a5c] sm:text-[0.75rem] "
            >
              {" "}
              Log Out{" "}
            </div>
          </div>
        }
      </div>

      {tasks.map((task, i) => (
        <TaskItem
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          status={task.status}
          assigndate={task.assigndate}
          tasknumber={i + 1}
        />
      ))}

      <div className="flex justify-end sticky  z-[99] bottom-[5%] sm:bottom-[3%] ">
        <span
          id="myBtn"
          onClick={() => topFunction()}
          className="text-[white] apearanimation h-3 w-3 sm:mr-1 bg-[#423d44] text-center py-[0.75rem] rounded-[50%] hidden transition-all cursor-pointer hover:bg-[#514c53] boxshadow2"
        >
          ^
        </span>
      </div>
    </div>
  );
};

export default DashboardMenu;
