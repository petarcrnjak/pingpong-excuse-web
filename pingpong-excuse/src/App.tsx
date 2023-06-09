import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Loading from "./Loading";
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading></Loading>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App;