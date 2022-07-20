import classes from './dashboard.module.css';
import { useState } from 'react';
import { aminTasks } from '../data/tasks/aminTasks';
import { aliTasks }from '../data/tasks/aliTasks';
import TaskItem from './taskitem/TaskItem';
import CreateTask from './create/CreateTask';
import Transactions from './transactions/Orders.js';
import CreateOrder from './transactions/CreateOrder';

const DashboardMenu = () => {
    
    const [aliIsActive, setAliIsActive] = useState(false);
    const [aminIsActive, setAminIsActive] = useState(false);
    const [transactionIsActive, setTrasnactionIsActive] = useState(false);
    const [createTask , setCreateTask] = useState(false);
    const [createOrder , setCreateOrder] = useState(false);

    const handleClick = event => {
     
     if(event.target.id === '1') {
       setAliIsActive(false);
        setAminIsActive(false);
        setTrasnactionIsActive(true);
        setCreateTask(false);
        setCreateOrder(false);
    return
     }
     if(event.target.id === '2') {
        setAliIsActive(false);
        setAminIsActive(true);
        setTrasnactionIsActive(false);
        setCreateTask(false);
        setCreateOrder(false);
    return
     }
     if(event.target.id === '3') {
        setAliIsActive(true);
        setAminIsActive(false);
        setTrasnactionIsActive(false);
        setCreateTask(false);
        setCreateOrder(false);
    return
     }
    
     
    };

   const handleCreateTask = () => {
    setCreateTask(true);
    setAliIsActive(false);
    setAminIsActive(false);
    setTrasnactionIsActive(false);
    setCreateOrder(false);
}

const handleCreateOrder = () => {
  setCreateTask(false);
  setAliIsActive(false);
  setAminIsActive(false);
  setTrasnactionIsActive(false);
  setCreateOrder(true);

}
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
  // scroll to the top of the document
  //==========================================================
  let mybutton = document.getElementById("myBtn");

  const scrollFunction = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    }
    else {
      mybutton.style.display = "none";
    }
  }
  
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.onscroll = function() {scrollFunction()};
//============================================================
//============================================================
    return (
        
        <div className='flex justify-center box-border flex-col mx-auto w-[95%] apearanimation sm:w-full relative ' id='maincontainer'>

<div className='DASHBOARD_HEADER h-[5rem] flex flex-row justify-between text-white border-b-[1px] border-[#545454] mb-2'>
<div className='my-auto flex flex-row'>
    <span className='h-[0.75rem] w-[0.75rem] sm:w-[0.5rem] sm:h-[0.5rem] bg-[#45ee45] m-auto rounded-[50%] mx-[0.5rem] '></span>
    <p className='text-[2rem] font-[600] sm:text-[1rem] tracking-[1px]'>Pannel</p>
</div>
{ transactionIsActive && <div className='ADD_ORDER m-auto bg-[#413846] apearanimation p-[0.5rem] rounded-[15px] boxshadow2 transition-all cursor-pointer hover:bg-[#554a5c] sm:text-[0.75rem] ' onClick={handleCreateOrder}> + Add  </div>}
<div className={`${classes.navigation} flex flex-row sm:text-[0.75rem] xsm:text-[0.6rem]`}>
    <a id='1' className={transactionIsActive ? classes.active : ''} onClick={handleClick}> Orders</a>
    <a id='2' className={aminIsActive ? classes.active : ''} onClick={handleClick}>Amin</a>
    <a id='3' className={aliIsActive ? classes.active : ''} onClick={handleClick}>Ali</a>
</div>

</div>

{!createTask && !transactionIsActive && !createOrder && <div className='w-full h-3 apearanimation flex'>
<button onClick={() => handleCreateTask()} className='bg-[#494850] m-auto text-white opacity-[0.6] w-5 h-[2.5rem] transition-all hover:opacity-[1] boxshadow2  rounded-[15px] justify-center text-center' >+ add</button>
</div>}

{aminIsActive && aminTaskList}
{aliIsActive  && aliTaskList}
{createTask   && <CreateTask/>}
{transactionIsActive && <Transactions />}
{createOrder && <CreateOrder />}

<div className='flex justify-end sticky  z-[99] bottom-[5%] sm:bottom-[3%] '><span id='myBtn' onClick={() => topFunction()} className='text-[white] apearanimation h-3 w-3 sm:mr-1 bg-[#423d44] text-center py-[0.75rem] rounded-[50%] hidden transition-all cursor-pointer hover:bg-[#514c53] boxshadow2'>^</span></div>


 </div>

        
    )
}

export default DashboardMenu;