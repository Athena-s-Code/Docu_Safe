import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./component/Home/HomePage";
import ErrorPage from "./component/Pages/ErrorPage";
import TestPage from "./component/TestPage/TestPage";
import Desktop3 from "./component/Desktop3/Desktop3";
import Desktop4 from "./component/Desktop4/Desktop4";
import Desktop5 from "./component/Desktop5/Desktop5";
import Desktop6 from "./component/Desktop6/Desktop6";
import Desktop7 from "./component/Desktop7/Desktop7";
import Desktop10 from "./component/Desktop10/Desktop10";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "test-page", element: <TestPage /> },
      { path: "desktop10", element: <Desktop10 /> },
      { path: "desktop3", element: <Desktop3 /> },
      { path: "desktop4", element: <Desktop4 /> },
      { path: "desktop5", element: <Desktop5 /> },
      { path: "desktop6", element: <Desktop6 /> },
      { path: "desktop7", element: <Desktop7 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
