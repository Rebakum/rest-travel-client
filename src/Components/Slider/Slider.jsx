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
                ><div className=" Slider slider1">
                        <h1>COX S BAZAR</h1>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider2">
                        <h1>BANGKOK</h1>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider3">
                        <h1>BALI</h1>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider4">
                        <h1>KULALAMPUR</h1>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider slider5">
                        <h1>HA LONG BAY</h1>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className="Slider slider6">
                    <h1>ANGKOR WAT</h1>
                    
                </div>
                </SwiperSlide>

            </Swiper>







        </div>
    );
};

export default Slider;