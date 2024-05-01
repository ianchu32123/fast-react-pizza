import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid-row-[auto_1fr_auto] grid h-screen ">
      {isLoading && <Loader />}
      <Header />
      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
