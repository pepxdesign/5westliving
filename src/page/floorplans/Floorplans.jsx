import Hero from "../../components/home/hero";
import FloorplanSelector from "../../components/home/floorplan-selector";
import useWindowWidth from "../../hooks/useWindowWidth";
import HeroBg from "../../assets/images/all/hero-bg2.jpg";
import HeroBgSM from "../../assets/images/all/mobile/hero-bg2.jpg";

const heroData = {
  title: "Your Perfect Home is Waiting",
  text: "Floorplans",
};

function Floorplans() {
  const width = useWindowWidth();
  const isMobile = width <= 500;
  const getImgSrc = () => isMobile ? HeroBgSM : HeroBg;

  return (
    <div className="aximo-all-section bg-light4">
      <Hero HeroImg={getImgSrc()} heroData={heroData} />
      <FloorplanSelector />
    </div>
  );
}

export default Floorplans;
