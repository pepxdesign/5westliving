import ImageBg from "../../../assets/images/all/intro-img.jpg";
import ImageBgSM from "../../../assets/images/all/mobile/intro-img.jpg";
import FadeInUp from "../../animation/FadeInUp";
import useWindowWidth from "../../../hooks/useWindowWidth";


function IntroImage() {
	const width = useWindowWidth();
  	const isMobile = width <= 500;

	return (
		<FadeInUp className="aximo-video-section2 extra-side-margin">
			<img src={isMobile ? ImageBgSM : ImageBg} alt="Vancouver city" />	
		</FadeInUp>
	);
}

export default IntroImage;
