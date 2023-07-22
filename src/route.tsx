import { RouteObject } from "react-router-dom";
import HomeIndex from "./pages/home/HomeIndex";
import ExperienceIndex from "./pages/experience/ExperienceIndex";
import { URLS } from "./data/url";


export const routeObject: RouteObject[] = [
    {
        path: URLS.home,
        element: <HomeIndex />,
    },
    {
        path: URLS.experience,
        element: <ExperienceIndex />,
    },
]


