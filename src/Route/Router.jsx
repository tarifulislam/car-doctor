
import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layouts/MainLayout/MainLayout';
import Error from "../Pages/Error/Error";
import Home from './../Pages/Home/Home';
import SignUp from "../Pages/Forms/SignUp";
import SignIn from "../Pages/Forms/SignIn";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "checkout/:id",
                element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
        ]
    },
]);
export default myRouter;