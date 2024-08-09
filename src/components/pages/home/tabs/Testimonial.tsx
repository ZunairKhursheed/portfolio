import { TestimonialCard } from "@/components/cards/TestimonialCard";
import testimonial from "@/data/testimonial.json";
import Slider from "react-slick";

export const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="lg:p-16 sm:p-8 p-3 shadow-[7px_7px_98px_rgba(9,47,104,.07)] rounded-md font-spacegrotesk bg-white">
        <h2 className="font-bold text-primary text-2xl">Testimonials</h2>
        <p className="font-bold md:max-w-[320px] md:text-5xl text-3xl leading-tight mb-10">
          What people say about me
        </p>
        <Slider {...settings}>
          {testimonial?.map((x: any, i: number) => (
            <TestimonialCard
              key={x?.client + i}
              review={x?.review}
              client={x?.client}
              company={x?.company}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
