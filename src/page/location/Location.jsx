import Hero from "../../components/home/hero";
import MasonryGallery from "../../components/home/masonry-gallery";
import HeroBg from "../../assets/images/all/hero-bg4.jpg";

const heroData = {
  title: "THE AMENITIES SPEAK FOR THEMSELVES",
  text: "Location and lifestyle",
};

function Location() {
  return (
	<div className="aximo-all-section bg-light4">
		<Hero HeroImg={HeroBg} heroData={heroData} />
		<MasonryGallery />
	</div>
  );
}

export default Location;
