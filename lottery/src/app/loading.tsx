import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="animate-spin rounded-full border-t-4 border-green-500 border-opacity-50 h-16 w-16"
        style={{ animation: "spin 1s linear infinite" }}
      ></div>
    </div>
  );
};

export default Loading;
