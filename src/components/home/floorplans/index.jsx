// import Blog1Img from "../../../assets/images/blog/blog1.png";
// import Blog2Img from "../../../assets/images/blog/blog2.png";
// import Shape5Img from "../../../assets/images/v4/shape5.png";
// import FadeInStagger from "../../animation/FadeInStagger";
// import BlogCard from "./BlogCard";

// const blogsData = [
// 	{
// 		id: crypto.randomUUID(),
// 		title: "How does business intelligence help companies change strategy?",
// 		category: "Marketing",
// 		date: "June 18, 2024",
// 		img: Blog1Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Maximizing profits - the small business guide to Artificial Intelligence",
// 		category: "Technology",
// 		date: "June 18, 2024",
// 		img: Blog2Img,
// 	},
// ];
import { Link } from "react-router-dom";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
import data from "../../../data/data.json";
import FP1Img from "../../../assets/images/all/floorplans-1.jpg";
import FP2Img from "../../../assets/images/all/floorplans-2.jpg";


function Floorplans() {
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
							<img src={FP1Img} alt="5West Home Front" />
						</FadeInUp>
					</div>
				</div>
				<div className="row mt-25">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb3">
							<img src={FP2Img} alt="5West Home Floorplan" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="aximo-default-content libre-font floorplan2-content-padding">
							<p className="align-left">{floorplansData.text2}</p>
							<FadeInUp className="aximo-btn-wrap">
								<Link className={`aximo-default-btn aximo-pricing-btn`} to="#">
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

export default Floorplans;
