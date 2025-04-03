
// import BrandLogo from "../../components/home/brand-logo";
// import Instagrams from "../../components/home/instagrams";
// import MissionVision from "../../components/home/mission-vission";
// import NumberBox from "../../components/home/number-box";
// import Projects from "../../components/home/projects";
// import Services from "../../components/home/services";
// import Testimonials from "../../components/home/testimonials";

import Hero from "../../components/home/hero";
import Design from "../../components/home/design";
import Floorplans from "../../components/home/floorplans";
import Location from "../../components/home/location";
import Team from "../../components/home/team";
import Intro from "../../components/home/intro";
import IntroImage from "../../components/home/introimage";

function Home() {
	return (
		<div className="aximo-all-section bg-light4">
			<Hero />
			<Intro />
			<IntroImage />
			<Design />
			<Floorplans />
			<Location />
			<Team />

			{/* <MissionVision />
			<BrandLogo />
			<Services />
			<WhyChooseUs />
			<NumberBox />
			<Projects />
			<Testimonials />
			
			<Instagrams /> */}
		</div>
	);
}

export default Home;