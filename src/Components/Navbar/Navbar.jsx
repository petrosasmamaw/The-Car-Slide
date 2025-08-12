import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-logo">EV-Olution</div>
        <div className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="nav-contact" >Contact</li>
        </div>
    </nav>
  );
};

export default Navbar;