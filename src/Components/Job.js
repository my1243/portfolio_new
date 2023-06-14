const Job = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div>
          <h1 className="text-4xl font-semibold mb-4">
            Position of <span className="text-[#fdae78]">Responsibility</span>
          </h1>
          <div className="w-24 h-1 rounded bg-gradient-to-r from-[#FE689D] to-[#fdae78]"></div>
        </div>
        <div className="flex w-full py-16 gap-x-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="w-full">
            <div class="font-medium title-font text-xl text-white mb-1 tracking-wider">
              Senior Software Developer
            </div>
            <p class="leading-relaxed text-lg">
              DDUConnect, Dharmsinh Desai University
            </p>
            <div className="flex justify-between text-gray-400">
              <p>02/2021 - 05/2023</p>
              <p>Nadiad, Gujarat</p>
            </div>
            <div className="mt-4">
              <h1 className="text-lg text-[#fdae78] font-medium mb-2">Achievements/Tasks</h1>
              <ul className="list-[circle] text-md flex flex-col gap-y-2">
                <li>
                  I along with my team work on adding new content for the
                  readers, improving the user interface & adding new features
                  for a better user experience and making the website
                  interactive.
                </li>
                <li>
                  We have successfully shifted a WordPress website into the MERN
                  stack.
                </li>
                <li>
                  Working with teams to organize events held at the college
                  campus.
                </li>
              </ul>
            </div>
            <div className="mt-4">
            <a href="https://dduconnect.in/" className="text-[#fdae78] underline">www.dduconnect.in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
