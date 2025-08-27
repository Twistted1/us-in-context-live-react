const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      <p className="mb-4">&copy; Us In Context. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        <a href="https://twitter.com/UsInContext" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg className="w-6 h-6 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-0.885 0.392-1.83 0.656-2.825..." />
          </svg>
        </a>
        <a href="https://instagram.com/UsInContext" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-6 h-6 hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366..." />
          </svg>
        </a>
        <a href="https://youtube.com/@UsInContext" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg className="w-6 h-6 hover:text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.963 2.963 0 00-2.08-2.088C19.894..." />
          </svg>
        </a>
        <a href="https://tiktok.com/@UsInContext" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <svg className="w-6 h-6 hover:text-fuchsia-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.862 3.28v2.497a5.614 5.614 0 002.69.715v2.376..." />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
