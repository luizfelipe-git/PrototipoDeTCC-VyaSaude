import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
// Substitua pelo caminho do seu ícone de ajuda
import helpIcon from "../../components/Sidenav/iconsSideBar/Home.png"; 

function ButtonFAQ() {
  return (
    <Link to="/faq" className="floating-faq-btn">
      {/* <img src={helpIcon}className="faq-icon" /> */}
      <span>FAQ</span>
    </Link>
  );
}

export default ButtonFAQ;