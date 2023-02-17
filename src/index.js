import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeNewPeople from "./components/WeNewPeople";

import P1 from "./components/p1";
import P2 from "./components/p2";
import P3 from "./components/p3";
import P4 from "./components/p4";
import P5 from "./components/p5";
import P6 from "./components/p6";
import P7 from "./components/p7";

const router = createBrowserRouter([
  {
    path: "/patriot",
    element: <App />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/patriot/wenewpeople",
    //     element: <WeNewPeople />,
    //   },
    // ],
  },
  {
    path: "/patriot/wenewpeople",
    element: <WeNewPeople />,
  },
  {
    path: "/patriot/p1",
    element: <P1 />,
  },
  {
    path: "/patriot/p2",
    element: <P2 />,
  },
  {
    path: "/patriot/p3",
    element: <P3 />,
  },
  {
    path: "/patriot/p4",
    element: <P4 />,
  },
  ,
  {
    path: "/patriot/p5",
    element: <P5 />,
  },
  ,
  {
    path: "/patriot/p6",
    element: <P6 />,
  },
  ,
  {
    path: "/patriot/p7",
    element: <P7 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <RouterProvider router={router} />

);
