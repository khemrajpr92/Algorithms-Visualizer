import SimpleSelect from "./SimpleSelect";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ startSearch, changeAlgorithm, reset, randomize }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <span className="navbar-brand"> {"Back"} </span>
      </Link>
      <div className="navbar-brand">
        Searching{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>Visualizer</span>
      </div>
      <div className="simple-select">
        <SimpleSelect changeAlgorithm={changeAlgorithm} />
      </div>

      <div className="navbar-brand-control">
        <button
          className="btn btn-outline-success m-2 btn-lg"
          onClick={startSearch}
        >
          Visualize
        </button>
        <button className="btn btn-outline-primary m-2 btn-lg" onClick={reset}>
          Reset
        </button>
        <button
          className="btn btn-outline-warning m-2 btn-lg"
          onClick={randomize}
        >
          Randomize
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
