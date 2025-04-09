// Team member images
import Hero from "../../components/home/hero";
import useWindowWidth from "../../hooks/useWindowWidth";
import HeroBg from "../../assets/images/all/hero-bg5.jpg";
import HeroBgSM from "../../assets/images/all/mobile/hero-bg5.jpg";
import TeamGrid from "./TeamGrid";

const heroData = {
  title: "Built on Excellence, Backed by Trust",
  text: "Our Team",
};

function Team() {
  const width = useWindowWidth();
  const isMobile = width <= 500;

  return (
    <div className="aximo-all-section bg-light">
		<Hero HeroImg={isMobile ? HeroBgSM : HeroBg} heroData={heroData}/>
		<TeamGrid />
	</div>
  );
}

export default Team;
