import { Link } from "react-router-dom";
import FadeInUp from "../../animation/FadeInUp";
import useWindowWidth from "../../../hooks/useWindowWidth";
import data from "../../../data/data.json";
import FeatureCard from "./FeatureCard";
import FadeInStagger from "../../animation/FadeInStagger";
import Location1Img from "../../../assets/images/all/location-1.jpg";
import Location2Img from "../../../assets/images/all/location-2.jpg";
import Location3Img from "../../../assets/images/all/location-3.jpg";
import Location1ImgSM from "../../../assets/images/all/mobile/location-1.jpg";
import Location2ImgSM from "../../../assets/images/all/mobile/location-2.jpg";
import Location3ImgSM from "../../../assets/images/all/mobile/location-3.jpg";

function LocationSection() {
  const width = useWindowWidth();
  const isMobile = width <= 500;

  const locationsData = [
    {
      id: crypto.randomUUID(),
      title: "Restaurants",
      img: isMobile ? Location1ImgSM : Location1Img,
      alt: "Okini Restaurant & Bar"
    },
    {
      id: crypto.randomUUID(),
      title: "Golf Courses",
      img: isMobile ? Location2ImgSM : Location2Img,
      alt: "Marine Drive Golf Club"
    },
    {
      id: crypto.randomUUID(),
      title: "Parks",
      img: isMobile ? Location3ImgSM : Location3Img,
      alt: "VanDusen Botanical Garden"
    },
  ];

  const locationData = data.location;
  return (
    <div className="section aximo-content-section location-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center">
            <div className="aximo-default-content libre-font location-content-padding">
              <span className="aximo-subtitle">{locationData.subtitle}</span>
              <h2>{locationData.title}</h2>
              <p>{locationData.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {locationsData.map((location, index) => (
            <FadeInStagger
              className="col-lg-4 col-md-4"
              index={index}
              key={location.id}
            >
              <FeatureCard location={location} />
            </FadeInStagger>
          ))}
          <div className="col-lg-12 d-flex align-items-center">
            <div className="aximo-default-content libre-font location-content-padding pb-0">
              <FadeInUp className="aximo-btn-wrap">
                <Link
                  className={`aximo-default-btn aximo-pricing-btn`}
                  to="/location"
                >
                  {locationData.btnlabel}
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSection;
