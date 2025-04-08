// Team member images
import Hero from "../../components/home/hero";
import HeroBg from "../../assets/images/all/hero-bg5.jpg";
import TeamGrid from "./TeamGrid";

const heroData = {
  title: "Built on Excellence, Backed by Trust",
  text: "Our Team",
};

function Team() {
  return (
    <div className="aximo-all-section bg-light">
		<Hero HeroImg={HeroBg} heroData={heroData}/>
		<TeamGrid />
	</div>
  );
}

export default Team;
