import AboutUsPage from "../pages/about-us/AboutUs";
import BlogPageList from "../components/section/blog/blogpage/BlogPageList";
import Home from "../pages/home/Home";
import { ROUTENAMES } from "./RouteNames";

export const routes_group = [
  { path: ROUTENAMES?.WEBSITE_HOME, element: <Home /> },
  {
    path: ROUTENAMES?.WEBSITE_BLOGPAGE,
    element: <BlogPageList />,
  },
  {
    path: ROUTENAMES?.WEBSITE_ABOUT,
    element: <AboutUsPage />,
  },
];
