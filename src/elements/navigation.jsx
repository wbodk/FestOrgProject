import { Link } from "react-router-dom";

export function Navigation(){
    return (
        <nav className="text-center mb-8">
        <ul className="inline-block">
          <li className="inline-block mr-4">
            <Link to="/" className=" hover:text-slate-400">Organizers</Link>
          </li>
          <li className="inline-block mr-4">
            <Link to="/fests" className="hover:text-slate-400">Festivals</Link>
          </li>
          <li className="inline-block mr-4">
            <span 
              className=" hover:text-slate-400 cursor-pointer"
              onClick={() => setShowLoginForm(true)}
            >
              Sign in
            </span>
          </li>
          <li className="inline-block mr-4">
            <span 
              className=" hover:text-slate-400 cursor-pointer"
              onClick={() => setShowRegisterForm(true)}
            >
              Sign up
            </span>
          </li>
        </ul>
      </nav>
    );
}