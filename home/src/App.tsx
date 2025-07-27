import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import { Main } from "./layouts/main";
import PdpApp from "pdp/Pdp";

import "./index.scss";
import "remixicon/fonts/remixicon.css";


const App = () => (
  <ErrorBoundary>
    <Header />
    <Router>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/product/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <PdpApp />
                </Suspense>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("app"));
