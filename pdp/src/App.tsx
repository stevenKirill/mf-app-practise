import React from "react";
import ReactDOM from "react-dom";
import Header from 'home/Header';
import Footer from 'home/Footer';
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss";
import ErrorBoundary from "./utils/ErrorBoundary";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/product:id" element={<Layout />}/>
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
