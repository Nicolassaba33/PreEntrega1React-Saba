import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-ul">
        <a href="#">
          <li>Inicio</li>
        </a>
        <li>PS5</li>
        <li>PS4</li>
        <li>Xbox One</li>
        <li>Xbox X</li>
        <li>PC</li>
      </ul>
    </div>
  );
};

export default NavBar;
