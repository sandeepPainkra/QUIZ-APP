import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "orangered",
        display: "grid",
        placeItems: "center",
        textTransform: "capitalize",
        color: "#fff",
        borderRadius: 5,
      }}
      className="errorMessage"
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
