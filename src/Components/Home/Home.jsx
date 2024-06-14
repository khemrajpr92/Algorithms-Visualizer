import Navbar from "./Navbar";
// import Cards from "./Cards";
import "./effects.css";
import home_img from "./images/Home.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1 className="title-h1" style={{ fontFamily: "Tourmaline" }}>
                <span className="title-h2">Algorithm</span> Visualizer
              </h1>
            </div>
            <div className="par">
              <p className="paragraph">
                Hard to Think ! Easy to Visualize !<br></br> Lets Visualize the
                Algorithms With Algorithm Visualizer For Better and Deep
                Understanding of Algorithms
              </p>
            </div>
            <div className="btns">
              <Link to={"/exploreMe"}>
                <button type="button" class="btn btn-outline-success btns_more">
                  Explore Me!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img src={home_img} alt="" className="container_img" />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Home;
