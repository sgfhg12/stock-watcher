import React from "react";
import ChartData from "../components/charts/ChartData";
import SideBar from "../components/SideBar/SideBar";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-wrapper">
        <ChartData />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
