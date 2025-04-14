// import { Link } from "react-router-dom";

function TeamCard({ member: { alt, img } }) {
	return (
		<div className="aximo-team-wrap">
			<div className="aximo-team-thumb">
				<img src={img} alt={alt} />
			</div>
		</div>
	);
}

export default TeamCard;
