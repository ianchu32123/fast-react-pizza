import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-800 hover:underline"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    );
  }
  return (
    <div>
      <Link
        to={to}
        className="text-sm text-blue-500 hover:text-blue-800 hover:underline"
      >
        {children}
      </Link>
    </div>
  );
}
