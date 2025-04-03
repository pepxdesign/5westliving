import { Link } from "react-router-dom";
import RoundShapeImg from "../../../assets/images/v4/round-shape.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import data from "../../../data/data.json";

function HeroContent() {
	const heroData = data.hero;

	return (
		<FadeInStaggerTwo className="aximo-hero-content4">
			{/* <FadeInStaggerTwoChildren>
				<p>
					<span>Your trusted business consultants</span>
				</p>
			</FadeInStaggerTwoChildren> */}
			<FadeInStaggerTwoChildren>
				<h1>
					{heroData.title}
					{/* <span className="aximo-hero-shape-title">
						experiences
						<span className="aximo-hero-round-shape">
							<img src={RoundShapeImg} alt="RoundShapeImg" />
						</span>
					</span> */}
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{heroData.text}
				</p>
			</FadeInStaggerTwoChildren>
			{/* <FadeInStaggerTwoChildren className="aximo-hero-btn-wrap">
				<Link className="aximo-default-btn pill blue-btn" to="/contact-us">
					Schedule a meeting
				</Link>

				<Link className="aximo-default-btn aximo-default-btn-outline pill outline-white" to="/portfolio-one">
					<span className="aximo-label-up">View all projects</span>
					<span className="aximo-label-up">View all projects</span>
				</Link>
			</FadeInStaggerTwoChildren> */}
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
