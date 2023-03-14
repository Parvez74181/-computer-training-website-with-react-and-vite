import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import { ProgressBar } from "react-top-loading-bar";
import LoadingBar from "react-top-loading-bar";
const Navigation = lazy(() => import("./components/Navigation.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const SingleCoursePage = lazy(() => import("./pages/SingleCoursePage.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

function App() {
  const [progress, setProgress] = useState(0);
  const updateProgress = (value) => {
    setProgress(value);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const routes = [
    { path: "/", element: <Home updateProgress={updateProgress} /> },
    { path: "/courses", element: <Courses updateProgress={updateProgress} /> },
    {
      path: "/courses/:title/:id",
      element: <SingleCoursePage updateProgress={updateProgress} />,
    },
  ];
  return (
    <>
      <Router>
        <Navigation />
        <LoadingBar
          color="white"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Suspense fallback={"..."}>
          <Routes>
            {routes.map((item, i) => {
              return (
                <>
                  <Route
                    key={i}
                    exact={true.toString()}
                    path={item.path}
                    element={item.element}
                  />
                </>
              );
            })}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
