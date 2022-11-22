import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import AppoinmentPage from "../../pages/AppoinmentPage/AppoinmentPage/AppoinmentPage";
import Home from "../../pages/Home/Home/Home";
import NotFound from "../../sharead/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appoinment',
                element: <AppoinmentPage />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])