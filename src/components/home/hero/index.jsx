import HeroBg from "../../../assets/images/all/hero-bg.jpg";
import HeroContent from "./HeroContent";
// import HeroVideo from "./HeroVideo";

function Hero() {

	return (
		<div className="aximo-hero-section4" style={{ backgroundImage: `url(${HeroBg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-10">
						<HeroContent />
					</div>
					{/* <div className="col-lg-4 d-flex align-items-end justify-content-center">
						<HeroVideo />
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Hero;
