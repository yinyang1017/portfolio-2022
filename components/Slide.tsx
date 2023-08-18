import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import Image from "next/image";
import "swiper/css/effect-fade";

interface Props {
  images: { url: string }[];
}

export default function Slide({ images }: Props) {
  return (
    <div className="bgSlider h-[32rem] overflow-hidden relative  w-auto ">
      <Swiper
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              <Image
                src={img.url}
                alt="tour"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
