import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h1 id="title">Page is not found.</h1>
      <Link to="/">Go back Home</Link>
    </main>
  );
}
