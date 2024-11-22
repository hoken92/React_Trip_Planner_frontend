import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/trips">My Trips</Link>
    </nav>
  );
}
