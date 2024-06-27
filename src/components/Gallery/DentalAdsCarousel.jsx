
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dentalAd1 from "../../assets/publicidad/1.png";
import dentalAd2 from "../../assets/publicidad/2.png";
import dentalAd3 from "../../assets/publicidad/3.png";
import dentalAd4 from "../../assets/publicidad/4.png";
import dentalAd5 from "../../assets/publicidad/5.png";

const DentalAdsCarousel = () => {
  const ads = [dentalAd1, dentalAd2, dentalAd3, dentalAd4, dentalAd5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-lg mx-auto">
      <Slider {...settings}>
        {ads.map((ad, index) => (
          <div key={index}>
            <img src={ad} alt={`Publicidad ${index + 1}`} className="w-32 h-20 rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DentalAdsCarousel;
