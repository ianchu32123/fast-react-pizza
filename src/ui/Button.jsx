import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm disabled:cursor-not-allowed" inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2';
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    round: base + "py-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    small: base + "py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm disabled:cursor-not-allowed border-2 border-stone-200 inline-block rounded-full bg-transparent  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 px-4 py-3 md:px-6 md:py-4",
  };
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
