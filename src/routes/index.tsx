import AboutUsPage from "../pages/about-us/AboutUs";
import BlogPageList from "../components/section/blog/blogpage/BlogPageList";
import Home from "../pages/home/Home";
import { ROUTENAMES } from "./RouteNames";
import CareerPage from "../pages/careerpage/CareerPage";
import SecurityPage from "../pages/securitypage/SecurityPage";
import PrivacyPage from "../pages/privacypage/PrivacyPage";
import { TermsPage } from "../pages/terms/TermsPage";

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
  {
    path: ROUTENAMES?.WEBSITE_PRIVACY,
    element: <PrivacyPage />,
  },
  {
    path: ROUTENAMES?.WEBSITE_TERMS,
    element: <TermsPage />,
  },
];
