const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
        <div className="flex justify-around py-3">
          <a className="flex flex-col items-center text-gray-500 hover:text-black transition">
            <span className="text-2xl">Home</span>
          </a>
          <a className="flex flex-col items-center text-gray-500 hover:text-black transition">
            <span className="text-2xl">Merch</span>
          </a>
          <a className="flex flex-col items-center text-gray-500 hover:text-black transition">
            <span className="text-2xl">Contact Us</span>
          </a>
        </div>
      </nav>
    </>
  );

};

export { Navbar }
