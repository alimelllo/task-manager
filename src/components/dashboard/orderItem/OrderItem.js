import { useState } from "react";

const OrderItem = (props)=> {

const [openOptions , SetOpenOptions] = useState(false);


    return (
    
        <div className='w-[80%] sm:w-[95%] flex flex-col topanimation border-[1px] border-solid border-[#474747] boxshadow  rounded-[5px] mx-auto my-[2.5rem]  '>
                  
          <div className="header flex flex-row justify-between sm:flex-col-reverse">
              <p className="p-[0.5rem] text-[white] sm:text-[0.7rem]">{props.title}</p>
              <span className={`h-[0.75rem] w-[0.75rem] rounded-[50%] m-[0.5rem]  ${props.status ==='PRIMARY_ENTER' ? 'bg-[#ff5622]' : props.status === 'IN_FLOW' ? 'bg-[yellow]' : props.status === 'COMPLETE' ? 'bg-[#0051ff]' : props.status === 'DELIEVERD' ? 'bg-[green]' : ''}`}></span>
          </div>
           
          <div className="order-date text-[gray] p-[0.5rem] sm:text-[0.8rem]">{props.orderDate}</div>

          <div className="owner text-[#bebebe] p-[0.5rem] sm:text-[0.6rem]">{props.owner} : {props.ownerNum}</div>
           
          <div className="price_transaction flex flex-row justify-between p-[0.5rem] md:text-[0.75rem] sm:text-[0.7rem] sm:flex-col "><p className="text-[#727272] sm:pb-1">{props.price}</p><p onClick={() => openOptions == false ? SetOpenOptions(true) : openOptions == true ? SetOpenOptions(false) : null} className="bg-[#3f3f57] text-center boxshadow2 text-[white] rounded-[15px]  py-[0.15rem] px-[0.5rem] transition-all hover:bg-[#50506e] cursor-pointer " href='#'>{openOptions && 'Close'}{!openOptions && 'Options'}</p></div>
         
         { openOptions && <div className="flex flex-row justify-around py-1 transition-all md:flex-col sm:flex-col sm:py-[0.5rem] ">
             <a className="bg-transparent border-[1px] border-solid border-[#bbbbbb] boxshadow2 text-[white] rounded-[15px] apearanimation py-[0.1rem] px-[0.5rem] transition-all hover:bg-[#c73f3f] text-center sm:my-[0.5rem] sm:w-10/12 sm:mx-auto" href='#'>Delete</a>
             {(props.status === 'PRIMARY_ENTER' || props.status === 'IN_FLOW' || props.status === 'COMPLETE') && <a className="bg-transparent border-[1px] border-solid border-[#bbbbbb] boxshadow2 text-[white] text-center rounded-[15px] apearanimation py-[0.1rem] px-[0.5rem] transition-all hover:bg-[#4db832] sm:my-[0.5rem] sm:w-10/12 sm:mx-auto" href='#'>Next</a>}
             <a className="bg-transparent border-[1px] border-solid border-[#bbbbbb] boxshadow2 text-[white] rounded-[15px] apearanimation py-[0.1rem] px-[0.5rem] transition-all hover:bg-[#537ae4] text-center sm:my-[0.5rem] sm:w-10/12 sm:mx-auto" href='#'>Factor</a>
        
             </div>
          
          
          }



         </div>
    )
    }
    
    export default OrderItem;