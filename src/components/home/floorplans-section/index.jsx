import { Link } from "react-router-dom";
import FadeInUp from "../../animation/FadeInUp";
import useWindowWidth from "../../../hooks/useWindowWidth";
import data from "../../../data/data.json";
import FP1Img from "../../../assets/images/all/floorplans-1.jpg";
import FP1ImgSM from "../../../assets/images/all/mobile/floorplans-1.jpg";
import FP2Img from "../../../assets/images/all/2452-preview.svg";


function FloorplansSection() {
	const width = useWindowWidth();
  	const isMobile = width <= 500;

	const floorplansData = data.floorplans;
	return (
		<div className="section aximo-content-section floorplan-section bg-dark-stone">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 d-flex align-items-center">
						<div className="aximo-default-content libre-font floorplan-content-padding">
							<span className="aximo-subtitle">{floorplansData.subtitle}</span>
							<h2>{floorplansData.title}</h2>
							<p>{floorplansData.text}</p>
						</div>
					</div>
					<div className="col-lg-12">
						<FadeInUp className="aximo-content-thumb3 full-width-image">
							<img src={isMobile ? FP1ImgSM  : FP1Img}  alt="Rendering of 5West main unit front" />
						</FadeInUp>
					</div>
				</div>
				<div className="row mt-25">
					<div className="col-lg-5">
						<FadeInUp className="aximo-content-thumb3">
							<img src={FP2Img} alt="2452 3 Bedroom Floorplan" />
						</FadeInUp>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="aximo-default-content libre-font floorplan2-content-padding">
							<p className="align-left">{floorplansData.text2}</p>
							<FadeInUp className="aximo-btn-wrap">
								<Link className={`aximo-default-btn aximo-pricing-btn`} to="/floorplans">
								{floorplansData.btnlabel}
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default FloorplansSection;
