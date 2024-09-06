import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/layout/Layout"
import Home from '../Pages/Home'
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import About from "../Pages/About";


export const mainRoute = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/Contact-Us",
                    element: <Contact />
                },
                {
                    path: "/Services",
                    element: <Services />
                },
                {
                    path: "/About-Us",
                    element: <About />
                },
            ]
        }
    ])