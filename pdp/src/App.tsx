import React from "react";
import ReactDOM from "react-dom";
import Header from 'home/Header';
import Footer from 'home/Footer';

import "./index.scss";
import ErrorBoundary from "./utils/ErrorBoundary";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <ErrorBoundary>
        <Header />
        <div>pdp content</div>
        <Footer />
      </ErrorBoundary>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
