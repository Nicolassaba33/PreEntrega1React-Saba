import "./Header.css";
import logo from "../../assets/Logo.jpg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={logo} alt="Big Games" />
      </div>
      <div className="Tittle">
        <h1>Tu Tienda Gamer</h1>
      </div>
    </div>
  );
};

export default Header;
