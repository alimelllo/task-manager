import { Orders } from "./Data";
import OrderItem from "../orderItem/OrderItem";

const Transactions = () => {

// orders will come from backend

        const orderListPrimaryEnter = Orders.map((order) => (
           order.status === 'PRIMARY_ENTER' &&
           <OrderItem 
           title={order.title}
           status={order.status}
           orderDate={order.orderDate}
           owner={order.owner}
           ownerNum={order.ownerNum}
           transaction={order.transaction}
           price={order.price}
           productId={order.productId}
        />  
          
        ));

        const orderListInFlow = Orders.map((order) => (
            order.status === 'IN_FLOW' &&
            <OrderItem 
            title={order.title}
            status={order.status}
            orderDate={order.orderDate}
            owner={order.owner}
            ownerNum={order.ownerNum}
            transaction={order.transaction}
            price={order.price}
            productId={order.productId}
            />  
              
            ));
      
        const orderListComplete = Orders.map((order) => (
                order.status === 'COMPLETE' &&
                <OrderItem 
                title={order.title}
                status={order.status}
                orderDate={order.orderDate}
                owner={order.owner}
                ownerNum={order.ownerNum}
                transaction={order.transaction}
                price={order.price}
                productId={order.productId}
                />  
                  
                ));
                
        const orderListDelieverd = Orders.map((order) => (
                    order.status === 'DELIEVERD' &&
                    <OrderItem 
                    title={order.title}
                    status={order.status}
                    orderDate={order.orderDate}
                    owner={order.owner}
                    ownerNum={order.ownerNum}
                    transaction={order.transaction}
                    price={order.price}
                    productId={order.productId}
                    />  
                      
                    ));

    return (
        <div className="main-container flex w-full">

    <div className="sort-field flex flex-row w-full justify-around  p-[0.5rem] ">

<div className="w-3/12 border-r-[1px] border-r-solid border-r-[#414141]  flex flex-col">
    <p className="text-[#f86538] tracking-[2px] text-center apearanimation sm:text-[0.75rem]">Primary</p>
    {orderListPrimaryEnter}
</div>
<div className="w-3/12 border-r-[1px] border-r-solid border-r-[#414141]  flex flex-col">
    <p className="text-[#ffc933] tracking-[2px] text-center apearanimation sm:text-[0.75rem]">In Flow</p>
    {orderListInFlow}
</div>
<div className="w-3/12 border-r-[1px] border-r-solid border-r-[#414141]  flex flex-col">
    <p className="text-[#33b4ff] tracking-[2px] text-center apearanimation sm:text-[0.75rem]">Complete</p>
    {orderListComplete}
</div>
<div className="w-3/12 border-l-[1px] border-l-solid border-l-[#3f3f3f] flex flex-col">
    <p className="text-[#99e635] tracking-[2px] text-center apearanimation sm:text-[0.75rem]">Delieverd</p>
    {orderListDelieverd}
</div>

    </div>

        </div>
    )
}
export default Transactions;