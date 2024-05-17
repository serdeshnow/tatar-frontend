import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
