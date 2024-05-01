import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bordaer-stone-600 flex items-center justify-between border-b-8 bg-yellow-500 px-4 py-3  uppercase sm:px-6 ">
      <Link to="/" className="tracking-widest">
        Fast react pizza co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
