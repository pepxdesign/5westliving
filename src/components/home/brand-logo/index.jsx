import Team1Img from "../../../assets/images/all/team-1.png";
import Team2Img from "../../../assets/images/all/team-2.png";
import Team3Img from "../../../assets/images/all/team-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		img: Team3Img,
	}
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 5,
	breakpoints: {
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 5,
		},
	},
};
function BrandLogo() {
	return (
		<div className="aximo-brandlogo-section2 extra-side-margin">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-brandlogo-item">
									<img src={item.img} alt="brand logo" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default BrandLogo;
