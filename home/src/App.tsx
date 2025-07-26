import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./layouts/main";
import "remixicon/fonts/remixicon.css";
import PdpApp from "pdp/Pdp";

import "./index.scss";


const App = () => (
  <>
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
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
