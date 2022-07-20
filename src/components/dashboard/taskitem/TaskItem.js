const TaskItem = (props)=> {

return (

    <div className='w-[60%] sm:w-[90%] flex flex-col relative topanimation border-[1px] border-solid border-[#474747] boxshadow  rounded-[5px] mx-auto my-[2.5rem]'>
        <span className='tasknumber absolute py-[0.25rem] px-[1rem] border-[1px] border-solid border-[#535353] boxshadow right-[98%] bottom-[85%] sm:right-[92%] sm:bottom-[90%] rounded-[20px] font-[800] text-center  text-[#ffffff]'>{props.tasknumber}</span>
        
            
        
        <div className='header-container flex justify-between'>
          
            <div className='pt-[0.5rem] text-[#ffffff] pl-2 tracking-[1px] font-[600] sm:text-[1rem] sm:mt-1 sm:max-w-[65%] '>
               {props.title}
            </div>
          
            <div className='status flex px-1 py-[1.5rem] text-white tracking-[1px] sm:text-[0.8rem]'>
                 <span className={props.status === 'To Do' ? 'todostatus' : props.status === 'Progress' ? 'inprogressstatus' : props.status === 'Done' ? 'donestatus' : null }></span>
               {props.status}
            </div>
        
        </div>
 
        <div className='assigned-at pl-2 text-[#636363] sm:mt-1'>assign at : {props.assigndate}</div>
             
 
        <div className='footer-container flex justify-between '>
        <div className='description pl-2 pb-1 mt-2 text-[#a8a8a8] max-w-[70%]'>{props.description}</div>
        <div className='deadline text-[#636363] mt-2 pr-1 sm:text-[1rem] sm:pl-1'> {props.deadline}</div>
       
       </div>
       
       
       
     </div>
)
}

export default TaskItem;