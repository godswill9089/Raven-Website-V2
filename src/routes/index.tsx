import BlogPageList from "../pages/blogpage/BlogPageList";
import Home from "../pages/home/Home";
import { ROUTENAMES } from "./RouteNames";

export const routes_group = [
  { path: ROUTENAMES?.WEBSITE_HOME, element: <Home /> },
  {
    path: ROUTENAMES?.WEBSITE_BLOGPAGE,
    element: <BlogPageList />,
  },
];
