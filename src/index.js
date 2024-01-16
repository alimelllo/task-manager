import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Redux/Store.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/authentication/Intro";
import CreateTask from "./components/dashboard/create/CreateTask";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/Login" element={<Intro />} />
         <Route path="/Create" element={<CreateTask />} />

      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
