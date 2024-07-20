import "./Navbar.css";
import data from "./data.json";

function Navbar() {
  console.log("data", data);
  const navItems = data.navbar;
  console.log("navItems", navItems);

  return (
    <div className="navbar-container">
      <div className="left-side">
        {navItems.slice(0, 3).map((item) => (
          <a key={item.id} href={item.url} className="items">
            {item.title}
          </a>
        ))}
      </div>
      <div className="center-logo">
        <a href="/">
          <img src="https://via.placeholder.com/21" alt="logo" />
        </a>
      </div>
      <div className="right-side">
        {navItems.slice(3, 6).map((item) => (
          <a key={item.id} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
