
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet
} from "react-router-dom";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Write } from "./pages/Write";

import "./style.scss";

const Layout =()=>{
  return (
     <>
      <Navbar/>
      <Outlet/>
      <Footer/>
     </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  
]);


function App() {
  return (
     <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>   
  );
}
export default App;
