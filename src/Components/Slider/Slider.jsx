import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./Slider.css"
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
    return (
        <div>

            <Swiper
                navigation={true}
                pagination={
                    { clickable: true }
                }
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={
                    {
                        delay: 2500

                    }
                }

                className="mySwiper"
                loop={true}>
                <SwiperSlide
                ><div className=" Slider slider1 flex flex-col justify-center items-center">
                        <h1 className="text-5xl rancho text-secondary">COX S BAZAR</h1>
                        <p className="text-poppins text-secondary">Immerse yourself in the vibrant culture and bustling street life of Thailand's capital city</p>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider2  flex flex-col justify-center items-center  ">
                        <h1 className="text-5xl rancho text-secondary">BANGKOK</h1>
                        <p className="text-poppins text-secondary">Immerse yourself in the vibrant culture and bustling street life of Thailand's capital city</p>

                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider3 flex flex-col justify-center items-center">
                        <h1 className="text-5xl rancho text-secondary">BALI</h1>
                        <p className="text-poppins text-secondary">Immerse yourself in the vibrant culture and bustling street life of Thailand's capital city</p>

                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider4 flex flex-col justify-center items-center">
                        <h1 className="text-5xl rancho text-secondary">KULALAMPUR</h1>
                        <p className="text-poppins text-secondary">Immerse yourself in the vibrant culture and bustling street life of Thailand's capital city</p>

                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider5 flex flex-col justify-center items-center">
                        <h1 className="text-5xl rancho text-secondary">HA LONG BAY</h1>
                        <p className="text-poppins text-secondary">Immerse yourself in the vibrant culture and bustling street life of Thailand's capital city</p>

                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className="Slider slider6 flex flex-col justify-center items-center">
                    <h1 className="text-5xl rancho text-secondary">ANGKOR WAT</h1>
                    <p className="text-poppins text-secondary">Immerse yourself in the vibrant culture and bustling street life of Thailand's capital city</p>

                    
                </div>
                </SwiperSlide>

            </Swiper>







        </div>
    );
};

export default Slider;