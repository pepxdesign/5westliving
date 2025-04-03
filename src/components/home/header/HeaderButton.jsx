import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn aximo-header-btn blue-btn2" to="#cta-section">
				<span className="aximo-label-up">Register Now</span>
				<span className="aximo-label-up">Register Now</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
