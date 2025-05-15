import { createBrowserRouter} from "react-router-dom";

import  App from "../App";
import Login from "../pages/login";
import Register from "../pages/register";
import SearchPage from "../pages/searchPage";
import Startpage from "../pages/startpage";
import Header from "../components/header";
import Footer from "../components/footer";
import UserSpace from "../pages/userspaces/userSpace";


export const router = createBrowserRouter([
{
    path: "/",
    element: <App />, //hier startet der Router
    children : [
                { path: "header", element: <Header />},
                { path: "footer", element: <Footer />},
                { path: "login", element: <Login />},
                { path: "search", element: <SearchPage />},
                { path: "", element: <Startpage />},
                { path: "register", element: <Register />},
                { path: "userspace", element: <UserSpace />},
    ],

},
]);