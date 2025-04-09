import Hero from "../../components/home/hero";
import MasonryGallery from "../../components/home/masonry-gallery";
import useWindowWidth from "../../hooks/useWindowWidth";
import HeroBg from "../../assets/images/all/hero-bg4.jpg";
import HeroBgSM from "../../assets/images/all/mobile/hero-bg4.jpg";

const heroData = {
  title: "THE AMENITIES SPEAK FOR THEMSELVES",
  text: "Location and lifestyle",
};

function Location() {
  const width = useWindowWidth();
  const isMobile = width <= 500;

  return (
	<div className="aximo-all-section bg-light4">
		<Hero HeroImg={isMobile ? HeroBgSM : HeroBg} heroData={heroData} />
		<MasonryGallery />
	</div>
  );
}

export default Location;
