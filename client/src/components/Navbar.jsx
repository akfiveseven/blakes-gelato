import logo from "../assets/logo.png"
import maitland_logo from "../assets/shed_transparent.png"


const Navbar = () => {
  return (
    <>

      <nav class="hidden border-t md:block bg-white border-black-200 border-b">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={maitland_logo} class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Blake's Gelato</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-black bg-white rounded-sm md:bg-transparent md:p-0 text-black" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Merch</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact Us</a>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50 h-[52px] mt-[60px]">
        <div className=" flex justify-around py-3">
          <a className="flex flex-col items-center text-gray-500 hover:text-black transition">
            <span className="text-2xl">Home</span>
          </a>
          <a className="flex flex-col items-center text-gray-500 hover:text-black transition">
            <span className="text-2xl">Merch</span>
          </a>
          <a className="flex flex-col items-center text-gray-500 hover:text-black transition">
            <span className="text-2xl">Contact</span>
          </a>
        </div>
      </nav>
    </>
  );

};

export { Navbar }
