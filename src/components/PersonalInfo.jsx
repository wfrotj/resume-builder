import React from "react";

function PersonalInfo({ personalInfo, handleChange }) {
  return (
    <div>
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
      />
      {/* Other input fields for email, phone, etc. */}
    </div>
  );
}

export default PersonalInfo;
