import Footer from "./Footer";
import Header from "./Navbar";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="p-12 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
