import React, { useEffect } from "react";
import feather from "feather-icons";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    // Initialize Feather Icons after the component mounts
    feather.replace();
  }, []);

  return (
    <div>
      {/* Add a shopping bag icon */}
      <i className="feather profile" data-feather="user"></i>
    </div>
  );
}

export default Profile;
