import { useState } from "react";
import Intro from "./components/authentication/Intro";
import DashboardMenu from "./components/dashboard/DashboardMenu";
import Timer from "./components/dashboard/timer/Timer";


function App() {

//check if user is logged in
const [isUserLoggedIn , setIsUserLoggedIn] = useState(false);
const userIsLogged = (boolean) => {
  setIsUserLoggedIn(boolean);
 
}





  return (
    <div className="flex">
    { !isUserLoggedIn && <Intro userIsLogged={userIsLogged}/> }
    { isUserLoggedIn && <DashboardMenu />}
    {/* <Timer/> */}
    </div>
  );
}

export default App;
