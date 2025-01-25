import { Link } from "react-router";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2L2 7l10 5 10-5-10-5zm0 13l-10-5v10l10 5 10-5V10l-10 5z"
            />
          </svg>
          <Link to="/" className="hover:text-yellow-400">
            HotelBooking
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="flex items-center hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l7-9 7 9-7 9-7-9z"
              />
            </svg>
            Home
          </Link>
          <Link to="/register" className="flex items-center hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 17l-4-4m0 0l-4-4m4 4h12M12 3v18"
              />
            </svg>
          Register
          </Link>
          <Link to="/sign-out" className="flex items-center hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3m0 0l-3 3m3-3h12M6 3v18"
              />
            </svg>
            Sign Out
          </Link>
          <Link to="/profile" className="flex items-center hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 19A7 7 0 1118.879 19m-7.758 0A7 7 0 0112 21a7 7 0 01-1.758-.245"
              />
            </svg>
            Profile
          </Link>
          <Link to="/about" className="flex items-center hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1 4h1v2m-1-6h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
            About
          </Link>
          <Link to="/contact" className="flex items-center hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a3.99 3.99 0 004.22 0L21 8m-9 7v4m0-4l-4 4m4-4l4 4"
              />
            </svg>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
