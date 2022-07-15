import classes from './dashboard.module.css';
import { useState } from 'react';
import { aminTasks } from '../data/tasks/aminTasks';
import { aliTasks }from '../data/tasks/aliTasks';
import TaskItem from './TaskItem';
import Timer from './timer/Timer';


const DashboardMenu = () => {
    
    const [aliIsActive, setAliIsActive] = useState(false);
    const [aminIsActive, setAminIsActive] = useState(false);
    const [deadlineIsActive, setDeadlineIsActive] = useState(false);

    const handleClick = event => {
     
     if(event.target.id === '1') {
       setAliIsActive(false);
        setAminIsActive(false);
        setDeadlineIsActive(true);
    return
     }
     if(event.target.id === '2') {
        setAliIsActive(false);
        setAminIsActive(true);
        setDeadlineIsActive(false);
    return
     }
     if(event.target.id === '3') {
        setAliIsActive(true);
        setAminIsActive(false);
        setDeadlineIsActive(false);
    return
     }
    
     
    };

    const aminTaskList = aminTasks.map((task) => (
        
         
    <TaskItem 
    title={task.title}
    description={task.description}
    deadline={task.deadline}
    status={task.status}
    assigndate={task.assigndate}
    tasknumber={task.tasknumber}
    
    />     
      ));

      const aliTaskList = aliTasks.map((task) => (
        
     
      <TaskItem 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      status={task.status}
      assigndate={task.assigndate}
      tasknumber={task.tasknumber}
      />     
   

  ));

  
    return (
        
        <div className='flex justify-center box-border flex-col mx-auto w-[95%] apearanimation sm:w-full'>

<div className='h-[5rem] flex flex-row justify-between text-white border-b-[1px] border-[#545454] mb-2'>
<div className='my-auto flex flex-row]'>
    <span className='h-[0.75rem] w-[0.75rem] sm:w-[0.5rem] sm:h-[0.5rem] bg-[#45ee45] m-auto rounded-[50%] mx-[0.5rem] '></span>
    <p className='text-[2rem] font-[600] sm:text-[1rem]'>DashBoard</p>
</div>
<div className={`${classes.navigation} flex flex-row sm:text-[0.75rem] xsm:text-[0.6rem]`}>
    <a id='1' className={deadlineIsActive ? classes.active : ''} onClick={handleClick}>Transactions</a>
    <a id='2' className={aminIsActive ? classes.active : ''} onClick={handleClick}>Amin</a>
    <a id='3' className={aliIsActive ? classes.active : ''} onClick={handleClick}>Ali</a>
</div>

</div>


{aminIsActive && aminTaskList}
{aliIsActive  && aliTaskList}
{deadlineIsActive && <Timer/>}

 </div>

        
    )
}

export default DashboardMenu;