import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./layouts/main";
import "remixicon/fonts/remixicon.css";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <Main />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
