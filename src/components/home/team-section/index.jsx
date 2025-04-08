// import Blog1Img from "../../../assets/images/blog/blog1.png";
// import Blog2Img from "../../../assets/images/blog/blog2.png";
// import Shape5Img from "../../../assets/images/v4/shape5.png";
// import FadeInStagger from "../../animation/FadeInStagger";
// import BlogCard from "./BlogCard";

// const blogsData = [
// 	{
// 		id: crypto.randomUUID(),
// 		title: "How does business intelligence help companies change strategy?",
// 		category: "Marketing",
// 		date: "June 18, 2024",
// 		img: Blog1Img,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		title: "Maximizing profits - the small business guide to Artificial Intelligence",
// 		category: "Technology",
// 		date: "June 18, 2024",
// 		img: Blog2Img,
// 	},
// ];
import { Link } from "react-router-dom";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
import BrandLogo from "../brand-logo";
import data from "../../../data/data.json";
import FadeInStagger from "../../animation/FadeInStagger";
import TeamCard from "./TeamCard";
import TeamLogo1 from "../../../assets/images/all/team-1.png";
import TeamLogo2 from "../../../assets/images/all/team-2.png";
import TeamLogo3 from "../../../assets/images/all/team-3.png";

const teamMembers = [
	{
	  "id": "t01",
	  "name": "Asanti",
	  "img": TeamLogo1
	},
	{
	  "id": "t02",
	  "name": "Realtor",
	  "img": TeamLogo2
	},
	{
	  "id": "t03",
	  "name": "Arch",
	  "img": TeamLogo3
	}
  ]



function TeamSection() {
	const teamData = data.team;
	return (
		<div className="section aximo-content-section team-section bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 d-flex align-items-center">
						<div className="aximo-default-content libre-font team-content-padding">
							<span className="aximo-subtitle">{teamData.subtitle}</span>
							<h2>{teamData.title}</h2>
						</div>
					</div>
				</div>
				<div className="row">
						{teamMembers.map((member, index) => (
							<FadeInStagger key={member.id} index={index} className="col-xl-4 col-md-4">
								<TeamCard member={member} />
							</FadeInStagger>
						))}
				</div>
			</div>
		</div>
	);
}

export default TeamSection;
