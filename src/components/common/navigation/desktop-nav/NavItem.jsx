/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

function NavItem({ dropdown, title, children, url = "" }) {

	const location = useLocation();
  	const currentPath = location.pathname;
	const urlFormated = url !== "/" ? `/${url}` : "/";
	
	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<a href="#" className="nav-link-item drop-trigger">
				{title} <i className="fas fa-angle-down"></i>
			</a>
			{children}
		</li>
	) : (
		<li className="nav-item">
			<Link to={urlFormated} 
				className={currentPath.includes(url) ? "nav-link-item active" : "nav-link-item"}			
				>
				{children}
			</Link>
		</li>
	);
}

export default NavItem;
