import React from "react";
import classes from "./Intro.module.css";
import lock from "../../icons/lock.png";
import done from "../../icons/done.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Intro = (props) => {
  let navigate = useNavigate();
  const [showWelcome, SetShowWelcome] = useState(false);
  // fake user data
  const fakeUsers = [
    { name: "ali", password: "1234" },
    { name: "admin", password: "2424" },
  ];
  //////////////////////////////

  const initialUserState = {
    name: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((state) => (state = { ...user, [name]: value }));
  };

  const submitHandler = (e) => {
    if (
      fakeUsers.find((item) => item.name === user.name) &&
      fakeUsers.find((item) => item.password === user.password)
    ) {
      localStorage.setItem("userName", user.name);
      localStorage.setItem("password", user.password);
      SetShowWelcome(true);
      setTimeout(() => {
        navigate("/");
        SetShowWelcome(false);
      }, 3000);
    } else {
      alert("wrong username or password !");
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <p>Task Manager App</p>
        </div>

        { !showWelcome &&
          <div className={classes.form}>
            <img className={classes.logo} src={lock}></img>

            <input
              className={`input shadow-3xl font-[monospace] placeholder:text-[#828282]`}
              autoComplete="false"
              name="name"
              placeholder="User Name "
              onChange={handleInputChange}
              required
            />
            <input
              className={`input shadow-3xl font-[monospace] placeholder:text-[#828282]`}
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
            <button onClick={submitHandler}>Enter</button>
          </div>
        }

        { showWelcome && 
          <>
            <img
              className="mx-auto w-[10%] mt-8 boxshadow rounded-[50%] apearanimation"
              src={done}
            ></img>
            <p className="text-[#aed7f1] mx-auto mt-3 tracking-[1px] text-[1.5rem] apearanimation boxshadow p-[0.5rem] rounded-[15px]">
              Welcome to Task manager
            </p>
          </>
        }
      </div>
    </>
  );
};

export default Intro;
