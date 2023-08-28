import './App.css';
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import WebLogin from "./Pages/Web-Login";
import WebTask from "./Pages/Web-Task";
import WebLocation from "./Pages/Web-Location";
import WebNewTask from "./Pages/Web-New Task";
const router = createBrowserRouter([
    {
        path: "/",
        element: <WebLogin/>,
    },
    {
        path: "/task",
        element: <WebTask/>
    },
    {
        path: "/location",
        element: <WebLocation/>
    },
    {
        path: "/modal",
        element: <WebNewTask/>
    }



]);
function App() {
  return (
      <div>
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
