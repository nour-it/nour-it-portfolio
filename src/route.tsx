import { RouteObject } from "react-router-dom";
import HomeIndex from "./pages/home/HomeIndex";

const routeObject: RouteObject[] = [
    {
        path: "",
        element: <HomeIndex />,
    },
] 

export default routeObject;

