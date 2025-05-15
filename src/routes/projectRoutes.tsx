import { createBrowserRouter} from "react-router-dom";

import  App from "../App";

import Register from "../pages/register";
import SearchPage from "../pages/searchPage";
import Startpage from "../pages/startpage";
import Login from "../pages/login";

import UserSpace from "../pages/userspaces/userSpace";
import NotFoundPage from "../components/notFoundPage";


export const projectRoutes = createBrowserRouter([
{
    path: "/",
    element: <App />, //hier startet der Router
    children : [
                 { path: "", element: <Startpage />},
                { path: "login", element: <Login />},
                { path: "search", element: <SearchPage />},
                { path: "register", element: <Register />},
                { path: "userspace", element: <UserSpace />},
    ],
},
    {
        path: "*", // Fängt alle nicht definierten Routen ab und zeigt eine "Not Found"-Seite an
        element: <NotFoundPage />,
    },


]);



export default projectRoutes;
