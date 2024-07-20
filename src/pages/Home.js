import "./Home.css";
import BtnGreen from "../components/BtnGreen";

function Home() {
  return (
    <div className="banner">
      <div class="content">
        <h1>ELEVATE YOUR ELEGANCE</h1>
        <p>Unveil Your Beauty with Us</p>
        <BtnGreen>Our Services</BtnGreen>
      </div>
      <img src="images/hero-women-leaf.webp" alt="Women with leaf"></img>
    </div>
  );
}

export default Home;
