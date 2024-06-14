import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="nav-item title-btn">
        <h6 style={{ cursor: "pointer" }} className="heading">
          Algorithms Visualizer
        </h6>
      </div>
      <div className="nav-item user-btn">
        <button className="btn btn-outline-success">Hello User!</button>
      </div>
      <div className="about-item">
        <Link to={"/about"}>
          <span>About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
