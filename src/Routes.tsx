import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopFourteen = React.lazy(() => import("pages/DesktopFourteen"));
const DesktopThirteen = React.lazy(() => import("pages/DesktopThirteen"));
const DesktopTwelve = React.lazy(() => import("pages/DesktopTwelve"));
const DesktopEleven = React.lazy(() => import("pages/DesktopEleven"));
const DesktopTen = React.lazy(() => import("pages/DesktopTen"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
          <Route path="/desktopnine" element={<DesktopNine />} />
          <Route path="/desktopten" element={<DesktopTen />} />
          <Route path="/desktopeleven" element={<DesktopEleven />} />
          <Route path="/desktoptwelve" element={<DesktopTwelve />} />
          <Route path="/desktopthirteen" element={<DesktopThirteen />} />
          <Route path="/desktopfourteen" element={<DesktopFourteen />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
