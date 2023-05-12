import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Admin from './pages/Admin/Admin';
import Register from './pages/Register/Register';
  const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path:"/login", element: <Login /> },
      {path:'/admin',element:<Admin />},
      {path:'/register',element:<Register />}
    ],
  },
]);
function App() {

  return (
    <div className="App">
        <RouterProvider router={router} />
       
      
    </div>
  );
}

export default App;
