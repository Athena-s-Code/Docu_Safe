import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./component/Home/HomePage";
import ErrorPage from "./component/Pages/ErrorPage";
import TestPage from "./component/TestPage/TestPage";
import Desktop10 from "./component/Desktop10/Desktop10";
import Desktop9 from "./component/Desktop9/Desktop9";
import Desktop11 from "./component/Desktop11/Desktop11";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "test-page", element: <TestPage /> },
      { path: "desktop10", element: <Desktop10 /> },
      { path: "desktop9", element: <Desktop9 /> },
      { path: "desktop11", element: <Desktop11 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
