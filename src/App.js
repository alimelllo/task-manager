
import { useEffect } from "react";
import DashboardMenu from "./components/dashboard/DashboardMenu";
import { Router, useNavigate } from "react-router-dom";


function App() {

  let navigate = useNavigate();


  useEffect(() => {
    if(!localStorage.getItem("userName") || !localStorage.getItem("password")){
      navigate('/Login')
    }
})

  return (
    <div className="flex">
    { <DashboardMenu />}
    </div>
  );
}

export default App;
