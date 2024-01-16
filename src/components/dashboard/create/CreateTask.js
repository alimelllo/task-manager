import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../../Redux/Reducers/Settings/Profile/TaskReducers.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateTask = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(createTask).payload.TaskReducers.tasks;

  const initialTaskState = {
    title: "",
    description: "",
    deadline: "",
    status: "",
    assigndate: "",
  };

  const [task, setTask] = useState(initialTaskState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask((state) => (state = { ...task, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(!task.title || !task.assigndate || !task.deadline || !task.description || !task.status){
      alert('Data is not complete');
      return;
    }
    if(tasks.find((item) => item.title === task.title )){
      alert('Task Name already exist');
      return;
    }
    dispatch(createTask(task));
    navigate("/");
  };

  return (
    <>
      <p
        onClick={() => window.history.back()}
        className="rounded-[5px] bg-[#415278d2] hover:bg-[#39496afe] cursor-pointer transition-all duration-200 text-center w-1/12 md:w-4/12 p-[5px] text-white m-2"
      >
        {" "}
        back{" "}
      </p>
      <div
        onSubmit={submitHandler}
        className="w-full flex flex-col mt-5 md:mt-2 apearanimation justify-center tracking-[1px]"
      >
        <p className="mx-auto  text-[#999999] font-[700] text-[1.2rem]">
          Create New Task
        </p>
        <form className="flex flex-col w-6/12 sm:w-10/12 mx-auto mt-2 justify-center border-t-[1px]  border-t-solid border-t-[gray] pt-1">
          <input
            onChange={handleInputChange}
            name="title"
            className="mt-1 h-3 boxshadow2 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white"
            placeholder="Title"
          ></input>
          <input
            onChange={handleInputChange}
            name="description"
            className="mt-1 h-5 boxshadow2 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white"
            placeholder="Description"
          ></input>
          <input
            onChange={handleInputChange}
            name="deadline"
            className="mt-1 h-3 boxshadow2 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white"
            placeholder="Deadline"
          ></input>
          <div className="flex flex-row mt-1 justify-between border-b-[1px] border-b-solid border-b-[gray] pb-2  ">
            <select
              name={"status"}
              onChange={handleInputChange}
              className="bg-[#423e47] text-[#bbbbbb] pl-1 py-[0.5rem] rounded-[10px] w-4/12 focus:outline-none sm:w-5/12"
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

            <input
              onChange={handleInputChange}
              name="assigndate"
              className=" h-3 sm:w-6/12 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white"
              placeholder="Assign Date"
            ></input>
          </div>

          <div className="flex">
            <button className="text-white h-3 bg-[#484549] mx-auto mt-2 rounded-[15px] w-4/12 opacity-[0.6] hover:opacity-[1] transition-all boxshadow2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
