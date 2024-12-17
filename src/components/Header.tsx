import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-primary/20 to-primary/10 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Spell Check Game
        </Link>
        <nav className="space-x-4">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;