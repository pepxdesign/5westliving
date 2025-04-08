// import { Link } from "react-router-dom";

function TeamCard({ member: { name, img } }) {
	return (
		<div className="aximo-team-wrap">
			<div className="aximo-team-thumb">
				<img src={img} alt={name} />
			</div>
		</div>
	);
}

export default TeamCard;
