import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// import Layout from "./layout";
// import Header from 'home/Header';
// import Footer from 'home/Footer';
import "remixicon/fonts/remixicon.css";
import { MiniCart } from "./components/MiniCart";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {/* <Header />
        <Layout />
      <Footer /> */}
      <MiniCart />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
