import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./Routes/root";
import ErrorPage from "./Routes/error-page";
import About from "./Routes/about";
import Contact from "./Routes/contact";
import Slots from "./Routes/slots";
import Fire from "./Routes/Fire/Fire";
import Blackjack from "./Routes/blackjack";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "slots",
                element: <Slots />
            },
            {
                path: "/fire",
                element: <Fire />
            },
            {
                path: "blackjack",
                element: <Blackjack />
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


