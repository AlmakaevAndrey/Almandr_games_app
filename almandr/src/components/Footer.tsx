const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span>© {new Date().getFullYear()} ALMANDR</span>
        <a
          href="https://github.com/AlmakaevAndrey/Almandr_games_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
