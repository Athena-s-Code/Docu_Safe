import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./component/Home/HomePage";
import ErrorPage from "./component/Pages/ErrorPage";
import TestPage from "./component/TestPage/TestPage";
import Desktop3 from "./component/Desktop3/Desktop3";
import Desktop4 from "./component/Desktop4/Desktop4";
import Desktop5 from "./component/Desktop5/Desktop5";
import Desktop6 from "./component/Desktop6/Desktop6";
import Desktop7 from "./component/Desktop7/Desktop7";
import Desktop8 from "./component/Desktop8/Desktop8";
import Desktop10 from "./component/Desktop10/Desktop10";
import Desktop12 from "./component/Desktop12/Desktop12";
import Desktop13 from "./component/Desktop13/Desktop13";
import Desktop14 from "./component/Desktop14/Desktop14";
import Desktop9 from "./component/Desktop9/Desktop9";
import Desktop11 from "./component/Desktop11/Desktop11";
import Desktop15 from "./component/Desktop15/Desktop15";
import Desktop16 from "./component/Desktop16/Desktop16";
import Desktop17 from "./component/Desktop17/Desktop17";
import Desktop18 from "./component/Desktop18/Desktop18";
import Desktop19 from "./component/Desktop19/Desktop19";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },

      // { path: "/desktop13", element: <Desktop13 /> },

      //encryption
      { path: "/desktop6", element: <Desktop6 /> },
      { path: "/desktop6/desktop7", element: <Desktop7 /> },
      { path: "/desktop6/desktop8", element: <Desktop8 /> },

      //highlight & hiding
      { path: "desktop9", element: <Desktop9 /> },
      { path: "/desktop9/desktop10", element: <Desktop10 /> },
      { path: "/desktop9/desktop11", element: <Desktop11 /> },

      //hygine
      { path: "/desktop3", element: <Desktop3 /> },
      { path: "/desktop3/desktop15", element: <Desktop15 /> },
      { path: "/desktop3/desktop15/desktop4", element: <Desktop4 /> },
      { path: "/desktop3/desktop15/desktop5", element: <Desktop5 /> },
      { path: "/desktop3/desktop15/desktop18", element: <Desktop18 /> },
      {
        path: "/desktop3/desktop15/desktop18/desktop19",
        element: <Desktop19 />,
      },

      //classification
      { path: "desktop12", element: <Desktop12 /> },
      { path: "/desktop12/desktop16", element: <Desktop16 /> },
      { path: "/desktop12/desktop16/desktop14", element: <Desktop14 /> },
      { path: "/desktop12/desktop16/desktop17", element: <Desktop17 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
