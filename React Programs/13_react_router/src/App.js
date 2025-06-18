import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ParaCompo from "./components/ParaCompo";
import Courses from "./components/Courses";
import Tests from "./components/Tests";
import Reports from "./components/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      { path: "tests", element: <Tests /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/student/:name",
    element: (
      <div>
        <Navbar />
        <ParaCompo />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
