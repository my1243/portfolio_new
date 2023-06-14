const About = () => {
  return (
    <>
      <section className="bg-[#02013d] py-24" id="about">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col gap-y-10 justify-center items-center">
          <div class="flex items-center justify-center lg:max-w-lg relative lg:w-full z-[100] md:w-1/2 w-5/6">
            <div className="absolute -z-10 h-72 w-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-bl from-[#FEAC73] to-[#FE689D] -bottom-4 rounded-3xl -left-4 sm:left-[4.5rem] md:left-1 lg:left-12"></div>
              <img
                class="object-cover object-center w-80 h-80 lg:w-96 lg:h-96 rounded-tr-[100px] border-4 border-white rounded-tl-3xl rounded-b-3xl z-50"
                alt="hero"
                src="/images/2.jpeg"
              />
            <div className="bg-gradient-to-br from-[#02013d] via-[#FEAC73] to-[#FE689D] rounded-full absolute -top-14 -right-16 sm:right-0 md:-right-10 lg:right-0 -z-10 h-48 w-48 flex justify-center items-center"><div className="h-32 w-32 bg-[#02013d] rounded-full"></div></div>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify">
            <h1 class="title-font sm:text-6xl text-5xl mb-8 font-bold text-white">
              About <span className="text-[#fdae78]">Me</span>
            </h1>
            <p class="mb-8 leading-relaxed text-gray-400 text-lg">
              I am a highly motivated and ambitious student pursuing a
              Bachelor's degree in Computer Engineering. With a passion for
              technology and a strong foundation in computer science and
              electrical engineering principles, I am eager to contribute to the
              field of computer engineering and make a positive impact on
              society.
            </p>
            <button class="inline-flex items-center bg-gradient-to-bl from-[#FEAC73] via-[#FEAC73] to-[#FE689D] border-2 border-white py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-medium hover:scale-105 duration-200">
              <a href="https://www.linkedin.com/in/mihir-yarra-6868a81b9/">
                Read More
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
