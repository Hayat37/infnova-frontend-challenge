import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/image (1).png" alt="logo" />
      </div>

      <nav className="nav">
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="actions">
        <button className="signin">Sign In</button>
        <button className="enroll">Enroll Now</button>
      </div>
    </header>
  );
}

export default Header;