import HeroContent from "./HeroContent";

function Hero({HeroImg, heroData}) {

	return (
		<div className="aximo-hero-section4" style={{ backgroundImage: `url(${HeroImg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-10">
						<HeroContent heroData={heroData} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
