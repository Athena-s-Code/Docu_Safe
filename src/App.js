import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./component/Home/HomePage";
import ErrorPage from "./component/Pages/ErrorPage";
import TestPage from "./component/TestPage/TestPage";
import Desktop3 from "./component/Desktop3/Desktop3";
import Desktop4 from "./component/Desktop4/Desktop4";
import Desktop5 from "./component/Desktop5/Desktop5";
import Desktop10 from "./component/Desktop10/Desktop10";
import Desktop12 from "./component/Desktop12/Desktop12";
import Desktop13 from "./component/Desktop13/Desktop13";
import Desktop14 from "./component/Desktop14/Desktop14";

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
      { path: "desktop12", element: <Desktop12 /> },
      { path: "desktop13", element: <Desktop13 /> },
      { path: "desktop14", element: <Desktop14 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
