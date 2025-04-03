import { Link } from "react-router-dom";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import data from "../../../data/data.json";
import Interior1Img from "../../../assets/images/all/interior-1.jpg";
import Interior2Img from "../../../assets/images/all/interior-2.jpg";

function Design() {
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
								{/* <Link className="aximo-default-btn pill corn-btn" to="/contact-us">
									<span className="aximo-label-up">Explore more</span>
									<span className="aximo-label-up">Explore more</span>
								</Link> */}
								<Link className={`aximo-default-btn aximo-pricing-btn`} to="#">
								{designData.btnlabel}
								</Link>
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInRight className="aximo-content-thumb3">
							<img src={Interior1Img} alt="Interior Living Room" />
						</FadeInRight>
					</div>
				</div>
				<div className="row full-width-image">
					<div>
						<FadeInUp className="aximo-content-thumb3">
							<img src={Interior2Img} alt="Interior Kitchen" />
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Design;



