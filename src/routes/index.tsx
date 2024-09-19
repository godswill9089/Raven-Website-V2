import AboutUsPage from "../pages/about-us/AboutUs";
import BlogPageList from "../components/section/blog/blogpage/BlogPageList";
import Home from "../pages/home/Home";
import { ROUTENAMES } from "./RouteNames";
import CareerPage from "../pages/careerpage/CareerPage";
import SecurityPage from "../pages/securitypage/SecurityPage";

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
  {
    path: ROUTENAMES?.WEBSITE_CAREER,
    element: <CareerPage />,
  },
  {
    path: ROUTENAMES?.WEBSITE_SECURITY,
    element: <SecurityPage />,
  },
];
