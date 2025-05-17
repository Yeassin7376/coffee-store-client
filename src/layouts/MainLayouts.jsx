import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-3/4 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
