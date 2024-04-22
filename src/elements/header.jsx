import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold mt-8">
        <Link to="/">Festorg</Link>
      </h1>
    </header>
  );
}
