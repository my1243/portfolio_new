import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Portfolio = () => {
    return(
        <>
        <div className="flex flex-col items-center mt-48 mb-12" id="port">
            <h1 className="text-4xl font-bold mb-4">My <span className="text-[#fdae78]">Portfolio</span></h1>
            <p className="text-gray-400 w-96 text-center">All of my latest developed projects are here. Simply click the project title and visit my full project.</p>
        </div>
            <EventSlider/>
        </>
    )
}

export default Portfolio;

const Card = (props) => {
    return(
        <>
            <div class="p-4">
        <div class="h-full bg-[#0F0E50] rounded-lg overflow-hidden p-4">
          <img class="lg:h-48 h-36 w-full object-cover object-top rounded-lg" src={props.data.img} alt="blog"/>
          <div class="p-6 hover:text-[#fdae78] cursor-pointer">
            <h1 class="title-font text-lg font-medium mb-3">{props.data.title}</h1>
            <p class="leading-relaxed mb-3 h-24">{props.data.summ}</p>
          </div>
        </div>
      </div>
        </>
    )
}


const EventSlider = () => {
    const data = [
        {
            title : "Swasthya - healthcare Solution",
            summ: "Swasthya is a software made for doctors, hospital staff and patients to do their daily work from prescribing medicines to book appointments easily.",
            img: "/images/project/1.png",
        },
        {
            title : "Stock Management Portal",
            summ: "A react app in which user can view stocks information, compare with other stocks and keep a record on the stocks they bought.",
            img: "/images/project/2.png",
        },
        {
            title : "VerifyIt - Online hallticket verifier",
            summ: "A mobile application used by faculties during examinations to verify students in the respective classrooms.",
            img: "/images/project/3.jpg",
        },
        {
            title : "DDUConnect 2.0",
            summ: "React Application used by College Club to add their content, events & showcase the talent to world.",
            img: "/images/project/4.png",
        },
        {
            title : "EGOV Portal",
            summ: "The intention to make this project was to make egov student portal more attractive and colourfull by using REACT App as a frontend.",
            img: "/images/project/5.jpg",
        },
        {
            title : "Weather Application",
            summ: "React app made using tailwind CSS. It helps to track Weather forecasts and current condition in real time.",
            img: "/images/project/6.png",
        },
        {
            title : "Notification System with realtime chat",
            summ: "Realtime Chat with friends using socket.io",
            img: "/images/project/7.png",
        },
    ]
    return (
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard
          breakpoints={{
            120:{
                slidesPerView:1
            },
            640:{
                slidesPerView:2
            },
            1024:{
                slidesPerView:3
            }
            
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          {
              data.map((val,idx) => {
                  return(<SwiperSlide zoom><Card data = {val}/></SwiperSlide>
              )}
          )}
        </Swiper>
      </>
    );
  }