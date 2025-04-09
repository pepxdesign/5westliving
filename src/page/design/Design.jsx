import Hero from "../../components/home/hero";
import FadeInUp from "../../components/animation/FadeInUp";
import useWindowWidth from "../../hooks/useWindowWidth";

import HeroBg from "../../assets/images/all/hero-bg3.jpg";
import HeroBgSM from "../../assets/images/all/mobile/hero-bg3.jpg";

import DesignImg1 from "../../assets/images/all/design-1.jpg";
import DesignImg2 from "../../assets/images/all/design-2.jpg";
import DesignImg3 from "../../assets/images/all/design-3.jpg";
import DesignImg4 from "../../assets/images/all/design-4.jpg";
import DesignImg5 from "../../assets/images/all/design-5.jpg";
import DesignImg6 from "../../assets/images/all/design-6.jpg";
import DesignImg7 from "../../assets/images/all/design-7.jpg";
import DesignImg8 from "../../assets/images/all/design-8.jpg";
import DesignImg9 from "../../assets/images/all/design-9.jpg";

import DesignImg1SM from "../../assets/images/all/mobile/design-1.jpg";
import DesignImg2SM from "../../assets/images/all/mobile/design-2.jpg";
import DesignImg3SM from "../../assets/images/all/mobile/design-3.jpg";
import DesignImg4SM from "../../assets/images/all/mobile/design-4.jpg";
import DesignImg5SM from "../../assets/images/all/mobile/design-5.jpg";
import DesignImg6SM from "../../assets/images/all/mobile/design-6.jpg";
import DesignImg7SM from "../../assets/images/all/mobile/design-7.jpg";
import DesignImg8SM from "../../assets/images/all/mobile/design-8.jpg";
// import DesignImg9SM from "../../assets/images/all/mobile/design-9.jpg";

const heroData = {
  title: "A HOME LIKE NO OTHER",
  text: "Design and life experience",
};

function Design() {
  const width = useWindowWidth();
  const isMobile = width <= 500;

  const getImgSrc = (ImgSrc) => {
    switch (ImgSrc) {
      case "HeroBg":
        return isMobile ? HeroBgSM : HeroBg;
      case "DesignImg1":
        return isMobile ? DesignImg1SM : DesignImg1;
      case "DesignImg2":
        return isMobile ? DesignImg2SM : DesignImg2;
      case "DesignImg3":
        return isMobile ? DesignImg3SM : DesignImg3;
      case "DesignImg4":
        return isMobile ? DesignImg4SM : DesignImg4;
      case "DesignImg5":
        return isMobile ? DesignImg5SM : DesignImg5;
      case "DesignImg6":
        return isMobile ? DesignImg6SM : DesignImg6;
      case "DesignImg7":
        return isMobile ? DesignImg7SM : DesignImg7;
      case "DesignImg8":
        return isMobile ? DesignImg8SM : DesignImg8;
      default:
        text = "Looking forward to the Weekend";
        break;
    }
  };

  return (
    <div className="aximo-all-section bg-light4">
      <Hero HeroImg={getImgSrc("HeroBg")} heroData={heroData} />
      <div className="aximo-hero-section5">
        <div className="container">
          <div className="aximo-hero-content5 design-title-center">
            <h2>
              From sleek finishes to airy layouts, these residences are built
              for inspired, effortless living.
            </h2>
          </div>
          <div className="row full-width-image">
            <div>
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg1")} alt="Interior Kitchen" />
              </FadeInUp>
            </div>
          </div>
          <div className="row split-media">
            <div className="col-lg-6 d-flex">
              <div className="aximo-default-content libre-font">
                {/* <h2>{designData.title}</h2> */}
                <p>
                  These thoughtfully designed apartments feature warm natural
                  wood finishes, sleek stone countertops, and high-end
                  appliances that elevate everyday living.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg2")} alt="Interior Living Room" />
              </FadeInUp>
            </div>
          </div>
          <div className="row full-width-image">
            <div>
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg3")} alt="Interior Kitchen" />
              </FadeInUp>
            </div>
          </div>
          <div className="row split-media">
            <div className="col-lg-6">
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg4")} alt="Interior Living Room" />
              </FadeInUp>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="aximo-default-content libre-font">
                {/* <h2>{designData.title}</h2> */}
                <p className="md-mt">
                  Whether you're preparing a family meal or entertaining guests,
                  this open-concept kitchen and living area offers the perfect
                  balance of comfort, style, and sophistication.
                </p>
              </div>
            </div>
          </div>
          <div className="row full-width-image xs-mb">
            <div>
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg5")} alt="Interior Kitchen" />
              </FadeInUp>
            </div>
          </div>
          <div className="row full-width-image">
            <div>
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg6")} alt="Interior Kitchen" />
              </FadeInUp>
            </div>
          </div>
          <div className="row split-media">
            <div className="col-lg-6 d-flex">
              <div className="aximo-default-content libre-font">
                {/* <h2>{designData.title}</h2> */}
                <p>
                  Step into bedrooms designed for rest and recharge, featuring
                  generous layouts, large windows, and calming finishes that
                  invite relaxation.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg7")} alt="Interior Living Room" />
              </FadeInUp>
            </div>
          </div>
          <div className="row full-width-image">
            <div>
              <FadeInUp className="aximo-content-thumb3">
                <img src={getImgSrc("DesignImg8")} alt="Interior Kitchen" />
              </FadeInUp>
            </div>
          </div>
          <div className="row split-media">
            <div className="col-lg-6 order-2">
              <FadeInUp className="aximo-content-thumb3">
                <img src={DesignImg9} alt="Interior Living Room" />
              </FadeInUp>
            </div>
            <div className="col-lg-6 d-flex order-1">
              <div className="aximo-default-content libre-font">
                {/* <h2>{designData.title}</h2> */}
                <p>
                  Paired with generously sized bathrooms—featuring wide
                  vanities, clean modern finishes, and plenty of room to
                  move—these spaces are designed for everyday ease and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
