import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-white.png";
import LogoDark from "../../../assets/images/logo/logo-dark.png";

function HeaderLogo({scroll}) {
	return (
		<div className="brand-logo">
			<Link to="/">
				<img src={scroll ? LogoDark : Logo} alt="Logo" className="light-version-logo" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
