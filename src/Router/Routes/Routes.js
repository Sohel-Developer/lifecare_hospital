import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
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
                path: '*',
                element: <NotFound />
            }
        ]
    }
])