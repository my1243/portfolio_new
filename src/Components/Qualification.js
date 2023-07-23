const Qualification = () => {
    return(
        <>
            <section class="text-white body-font w-full lg:w-1/2">
  <div>
        <h1 className="text-4xl font-semibold mb-4">Academic <span className="text-[#fdae78]">Qualification</span></h1>
        <div className="w-24 h-1 rounded bg-gradient-to-r from-[#FE689D] to-[#fdae78]"></div>
  </div>
  <div class="py-10 mx-auto flex flex-wrap w-full">
    <div class="flex flex-wrap w-full">
      <div class="md:py-6 w-full">
        <div class="flex relative pb-12 w-full">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-white mb-1 tracking-wider">B.Tech Information Technology</h2>
            <p class="leading-relaxed text-lg">Dharmsinh Desai University</p>
            <div className="flex justify-between text-gray-400">
                <p>10/2020 - Present</p>
                <p>CPI: 8.66</p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-white mb-1 tracking-wider">HSC</h2>
            <p class="leading-relaxed text-lg">Hebron Secondary School</p>
            <div className="flex justify-between text-gray-400">
                <p>06/2019 - 05/2020</p>
                <p>Percentile: 94.72%</p>
            </div>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-xl text-white mb-1 tracking-wider">SSC</h2>
            <p class="leading-relaxed text-lg">Hebron Secondary School</p>
            <div className="flex justify-between text-gray-400">
                <p>06/2017 - 05/2018</p>
                <p>Percentile: 97%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Qualification;