import { Link } from "react-router-dom";
import FadeInUp from "../../animation/FadeInUp";
import useWindowWidth from "../../../hooks/useWindowWidth";
import data from "../../../data/data.json";
import Interior1Img from "../../../assets/images/all/interior-1.jpg";
import Interior2Img from "../../../assets/images/all/interior-2.jpg";
import Interior1ImgSM from "../../../assets/images/all/mobile/interior-1.jpg";
import Interior2ImgSM from "../../../assets/images/all/mobile/interior-2.jpg";

function DesignSection(){
  const width = useWindowWidth();
  const isMobile = width <= 500;

  const designData = data.design;
  return (
    <div className="section aximo-content-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex align-items-center">
            <div className="aximo-default-content libre-font design-content-padding">
              <span className="aximo-subtitle">{designData.subtitle}</span>
              <h2>{designData.title}</h2>
              <p>{designData.text}</p>
              <FadeInUp className="aximo-btn-wrap">
                <Link
                  className={`aximo-default-btn aximo-pricing-btn`}
                  to="/design"
                >
                  {designData.btnlabel}
                </Link>
              </FadeInUp>
            </div>
          </div>
          <div className="col-lg-5">
            <FadeInUp className="aximo-content-thumb3">
              <img src={isMobile ? Interior1ImgSM : Interior1Img} alt="Interior Living Room" />
            </FadeInUp>
          </div>
        </div>
        <div className="row full-width-image">
          <div>
            <FadeInUp className="aximo-content-thumb3">
              <img src={isMobile ? Interior2ImgSM : Interior2Img}  alt="Interior Kitchen" />
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignSection;
