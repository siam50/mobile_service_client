import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Review from "../../Pages/Review/Review";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://mobile-service-server.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://mobile-service-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>,
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    },
])

export default router;