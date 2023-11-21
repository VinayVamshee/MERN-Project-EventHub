import "./style.css";
import React from "react";
import NavItems from "./NavItems";

export default function NavigationBar() {
  return (
    <div className="NavigationBar bg-dark">
      <NavItems />
    </div>
  );
}
