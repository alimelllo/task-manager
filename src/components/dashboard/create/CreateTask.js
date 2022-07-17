const CreateTask = (props) => {
return (
<div className="w-full flex flex-col apearanimation justify-center tracking-[1px]">
   <p className="mx-auto  text-[#999999] font-[700] text-[1.2rem]">Create New Task</p>
   <form className="flex flex-col w-6/12 sm:w-10/12 mx-auto mt-2 justify-center border-t-[1px]  border-t-solid border-t-[gray] pt-1">
   <input className="mt-1 h-3 boxshadow2 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white" placeholder="Title"></input>   
   <input className="mt-1 h-5 boxshadow2 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white" placeholder="Description"></input>
   <input className="mt-1 h-3 boxshadow2 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white" placeholder="Deadline"></input>
   <div className="flex flex-row mt-1 justify-between border-b-[1px] border-b-solid border-b-[gray] pb-2  ">
   <select className="bg-[#423e47] text-[#bbbbbb] pl-1 py-[0.5rem] rounded-[10px] w-4/12 focus:outline-none sm:w-5/12">
       <option className="focus:outline-none">To Do</option>
       <option className="focus:outline-none">Progress</option>
       <option className="focus:outline-none">Done</option>
   </select>

   <input className=" h-3 sm:w-6/12 bg-[#423e47] rounded-[10px] pl-1 focus:outline-none text-white" placeholder="Assign Date"></input>
   </div>

     <div className="flex">
         <button className="text-white h-3 bg-[#484549] mx-auto mt-2 rounded-[15px] w-4/12 opacity-[0.6] hover:opacity-[1] transition-all boxshadow2">Submit</button>
     </div>
      
      
   
   </form>



</div>
)
}

export default CreateTask;