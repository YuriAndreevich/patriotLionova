import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './swiper.scss'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper";

export default function MainSwiper(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                autoplay
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {props.data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.src} alt='' />
                        {console.log(item.src)}
                    </SwiperSlide>
                ))}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {props.data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.src} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
