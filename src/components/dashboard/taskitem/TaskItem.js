import { useDispatch } from "react-redux";
import { removeTask , changeStatus } from "../../../Redux/Reducers/Settings/Profile/TaskReducers.ts";
import { useState } from "react";

const TaskItem = (props) => {
  const [showChangeStatus, setShowChangeStatus] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setShowChangeStatus(false);
    dispatch(changeStatus({ title: props.title, status: e.target.value }));
  };

  return (
    <div className="w-[60%] sm:w-[90%] flex flex-col relative topanimation border-[1px] border-solid border-[#474747] boxshadow  rounded-[5px] mx-auto my-[2.5rem]">
      <span className="tasknumber absolute py-[0.25rem] px-[1rem] border-[1px] border-solid border-[#535353] boxshadow right-[98%] bottom-[85%] sm:right-[92%] sm:bottom-[90%] rounded-[20px] font-[800] text-center  text-[#ffffff]">
        {props.tasknumber}
      </span>

      <div className="header-container flex justify-between">
        <div className="pt-[0.5rem] text-[#ffffff] pl-2 tracking-[1px] font-[600] sm:text-[1rem] sm:mt-1 md:w-[20%] ">
          {props.title}
        </div>

        <div className="status flex flex-row px-1 py-[1.5rem] text-white tracking-[1px] sm:text-[0.8rem]">
          {!showChangeStatus ? (
            <>
              <span
                className={`
                ${
                  props.status === "To Do"
                    ? "todostatus"
                    : props.status === "In Progress"
                    ? "inprogressstatus"
                    : props.status === "Completed"
                    ? "donestatus"
                    : null
                }
              `}
              ></span>
              <p
                onClick={() => setShowChangeStatus(true)}
                className="bg-[#2c282f] hover:bg-[#19161b] mr-[5px] flex items-center px-2 rounded-lg cursor-pointer transition-all duration-200"
              >
                {props.status}
              </p>
            </>
          ) : (
            <>
              <select
                name={"status"}
                onChange={handleInputChange}
                className="bg-[#2c282f] text-[#bbbbbb] rounded-[10px] w-8/12 focus:outline-none"
              >
                <option
                  value={"In Progress"}
                  className="focus:outline-none hidden"
                  name={"status"}
                >
                  Choose Status{" "}
                </option>
                <option
                  name={"status"}
                  value={"In Progress"}
                  className="focus:outline-none"
                >
                  In progress
                </option>
                <option
                  name={"status"}
                  value={"Completed"}
                  className="focus:outline-none"
                >
                  Completed
                </option>
              </select>
            </>
          )}

          <button
            onClick={() => dispatch(removeTask({ title: props.title }))}
            className="text-white bg-[#622222] rounded-[10px] p-[5px] px-1 hover:bg-[#b62a2a] transition-all duration-200 "
          >
            Delete
          </button>
        </div>
      </div>

      <div className="assigned-at pl-2 text-[#636363] sm:mt-1">
        assign at : {props.assigndate}
      </div>

      <div className="footer-container flex justify-between ">
        <div className="description pl-2 pb-1 mt-2 text-[#a8a8a8] max-w-[70%]">
          {props.description}
        </div>
        <div className="deadline text-[#636363] mt-2 pr-1 sm:text-[1rem] sm:pl-1">
          {" "}
          {props.deadline}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
