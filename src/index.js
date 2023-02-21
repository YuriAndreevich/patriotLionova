import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'


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
    path: "/",
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
    path: "/wenewpeople",
    element: <WeNewPeople />,
  },
  {
    path: "/p1",
    element: <P1 />,
  },
  {
    path: "/p2",
    element: <P2 />,
  },
  {
    path: "/p3",
    element: <P3 />,
  },
  {
    path: "/p4",
    element: <P4 />,
  },
  ,
  {
    path: "/p5",
    element: <P5 />,
  },
  ,
  {
    path: "/p6",
    element: <P6 />,
  },
  ,
  {
    path: "/p7",
    element: <P7 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <ChakraProvider> <RouterProvider router={router} /></ChakraProvider>

);
