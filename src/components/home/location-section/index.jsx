import { Link } from "react-router-dom";
import FadeInUp from "../../animation/FadeInUp";
import data from "../../../data/data.json";
import FeatureCard from "./FeatureCard";
import FadeInStagger from "../../animation/FadeInStagger";


import Location1Img from "../../../assets/images/all/location-1.jpg";
import Location2Img from "../../../assets/images/all/location-2.jpg";
import Location3Img from "../../../assets/images/all/location-3.jpg";

const locationsData = [
	{
		id: crypto.randomUUID(),
		title: 'Restaurants',
		img: Location1Img
	},
	{
		id: crypto.randomUUID(),
		title: 'Golf Courses',
		img: Location2Img
	},
	{
		id: crypto.randomUUID(),
		title: 'Parks',
		img: Location3Img
	},
];

function LocationSection() {
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
						<FadeInStagger className="col-lg-4 col-md-4" index={index} key={location.id}>
							<FeatureCard location={location} />
						</FadeInStagger>
					))}
					<div className="col-lg-12 d-flex align-items-center">
						<div className="aximo-default-content libre-font location-content-padding pb-0">
							<FadeInUp className="aximo-btn-wrap">
								<Link className={`aximo-default-btn aximo-pricing-btn`} to="/location">
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
