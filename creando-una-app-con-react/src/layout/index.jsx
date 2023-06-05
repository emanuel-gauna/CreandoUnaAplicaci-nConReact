import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";
import { Sidebar } from "../components/Sidebar";
import PropTypes from "prop-types";

export const Layout = ({children}) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <TopBar />
        <div id="content">{children}</div>
        <Footer autor={"DH-movies"}/>
      </div>
    </div>
  );
};

Layout.propTypes = { 
  children: PropTypes.object.isRequired,
}

