import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss";
import ErrorBoundary from "./utils/ErrorBoundary";
import "remixicon/fonts/remixicon.css";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <ErrorBoundary>
        <Routes>
          <Route path="/product:id" element={<Layout />}/>
        </Routes>
      </ErrorBoundary>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
