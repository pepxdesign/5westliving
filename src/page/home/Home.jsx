import Hero from "../../components/home/hero";
import DesignSection from "../../components/home/design-section";
import FloorplansSection from "../../components/home/floorplans-section";
import LocationSection from "../../components/home/location-section";
import TeamSection from "../../components/home/team-section";
import Intro from "../../components/home/intro";
import IntroImage from "../../components/home/introimage";
import HeroBg from "../../assets/images/all/hero-bg.jpg";


const heroData = {
	title: "Luxury Living at 5WEST",
	text: "Character Homes Located in the Heart of Kerrisdale"
}


function Home() {
	return (
		<div className="aximo-all-section bg-light4">
			<Hero HeroImg={HeroBg} heroData={heroData}/>
			<Intro />
			<IntroImage />
			<DesignSection />
			<FloorplansSection />
			<LocationSection />
			<TeamSection />
		</div>
	);
}

export default Home;