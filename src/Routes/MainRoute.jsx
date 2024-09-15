import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/layout/Layout"
import Home from '../Pages/Home'


export const mainRoute = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ]
        }
    ])