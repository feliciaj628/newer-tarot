import React, { useEffect } from "react";
import feather from "feather-icons";
import "./ShoppingButton.css";

function ShoppingBag() {
  useEffect(() => {
    // Initialize Feather Icons after the component mounts
    feather.replace();
  }, []);

  return (
    <div>
      {/* Add a shopping bag icon */}
      <i className="feather shopping-icon" data-feather="shopping-bag"></i>
    </div>
  );
}

export default ShoppingBag;
