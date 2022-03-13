import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div style={{ margin: '10px' }}>Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
