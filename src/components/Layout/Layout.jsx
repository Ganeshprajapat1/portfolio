import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;