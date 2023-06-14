const Contact = () => {
    return(
        <>
            <section class="text-white body-font relative" id="contact">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Contact <span className="text-[#fdae78]">With Me</span></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to directly contact with me via phone or email below or fill up this form below then send me.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-8 p-4 rounded-tl-3xl rounded-br-3xl rounded-tr-[72px] rounded-bl-[72px] bg-gradient-to-bl from-[#fdae78] to-[#FE689D]">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full flex justify-center">
          <button class="inline-flex items-center bg-white py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-lg font-medium mt-4 md:mt-0 text-black">Send Message</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Contact;