const Landing = () => {
    return(
        <>
            <section class="text-white body-font relative z-0 " id="home">
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font text-lg mb-4 text-gray-400 uppercase">Welcome to my world
      </h1>
      <h1 class="title-font sm:text-6xl text-4xl mb-4 font-bold text-white">Hi, I'm Mihir</h1>
      <h1 class="title-font sm:text-5xl text-2xl mb-4 font-semibold text-white">Web <span className="text-[#fdae78]">Developer</span> & <span className="text-[#fdae78]">Student</span></h1>
      <p class="text-lg leading-relaxed">I'm am pursuing my Bachelor in Information Technology from Dharmsinh Desai University.</p>
      <p class="mb-8 text-lg leading-relaxed">Visit my profile & stay connect with me.</p>
        <button class="inline-flex items-center bg-gradient-to-bl from-[#FEAC73] via-[#FEAC73] to-[#FE689D] border-2 border-white py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><a href="Mihir_resume.pdf" download={"Mihir_resume.pdf"}>Download My CV</a></button>
    </div>
    <div class="lg:max-w-lg lg:w-full z-50 md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/images/1.png"/>
    </div>
  </div>
            <div className="xl:h-[810px] xl:w-[840px] rotate-12 rounded-[25%] absolute -top-36 -right-60 bg-gradient-to-bl  via-[#fdae78] from-[#fdae78] to-[#FE689D]"></div>
</section>
        </>
    )
}

export default Landing;