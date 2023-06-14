const Navbar = () => {
  return (
    <>
      <header class="text-white body-font z-50">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">MY</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <div>
            <a class="mr-5 hover:text-white hover:font-semibold" href="#about">About Me</a>
            <div className="h-1 bg-gradient-to-r from-[#FE689D] to-[#fdae78] w-10 rounded-full mt-1"></div>
            </div>
            <div>
            <a class="mr-5 hover:text-white hover:font-semibold" href="#skill">Skills & Certificates</a>
            <div className="h-1 bg-gradient-to-r from-[#FE689D] to-[#fdae78] w-10 rounded-full mt-1"></div>
            </div>
            <div>
            <a class="mr-5 hover:text-white hover:font-semibold" href="#port">Portfolio</a>
            <div className="h-1 bg-gradient-to-r from-[#FE689D] to-[#fdae78] w-10 rounded-full mt-1"></div>
            </div>
          </nav>
          <button class="z-[100] inline-flex items-center bg-white text-black font-medium py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-lg mt-4 md:mt-0">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
