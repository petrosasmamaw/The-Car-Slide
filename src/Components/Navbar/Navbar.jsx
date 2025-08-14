import '../../csss/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-logo">EV-Olution</div>
        <div className="nav-menu">
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav-contact">Contact</li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;