import Hero from "../../components/home/hero";
import FloorplanSelector from "../../components/home/floorplan-selector";
import HeroBg from "../../assets/images/all/hero-bg2.jpg";

const heroData = {
	title: "Your Perfect Home is Waiting",
	text: "Floorplans"
}

function Floorplans() {
	return (
		<div className="aximo-all-section bg-light4">
			<Hero HeroImg={HeroBg} heroData={heroData}/>
			<FloorplanSelector />
		</div>
	);
}

export default Floorplans;