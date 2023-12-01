import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import img1 from "../../../assets/images/1.png"
import img2 from "../../../assets/images/2.png"
import img3 from "../../../assets/images/3.png"
import img4 from "../../../assets/images/4.png"


import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";




// import Costumers from "../costumers";

import "./index.css";

export default function Culture () {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      // Inicializar o movimento automático
      const autoSlideInterval = setInterval(() => {
        swiperInstance.slideNext(); // Mover para o próximo slide
        clearInterval(autoSlideInterval); // Interromper após o primeiro slide
      }, 1000); // Intervalo de 3 segundos

      return () => {
        // Limpar o intervalo quando o componente for desmontado
        clearInterval(autoSlideInterval);
      };
    }
  }, [swiperInstance]);

  return (
    
      <div className="images" id="culture">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          onSwiper={setSwiperInstance}
          // spaceBetween={-100} // Ajuste o valor conforme necessário
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
        </Swiper>
      </div>
  
   
  );
};