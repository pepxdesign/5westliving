/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavItem = ({ items, depthLevel, showMenu, setShowMenu }) => {
	const [dropdown, setDropdown] = useState(false);

	const closeDropdown = () => {
		dropdown && setDropdown(false);
		showMenu && setShowMenu(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	const animationVariants = {
		initial: {
			rotate: 0,
		},
		animate: () => {
			if (dropdown) {
				return {
					rotate: -180,
					transition: {
						// delay: 0,
						duration: 0.25,
					},
				};
			}
		},
	};

	return items.submenu ? (
		<li className="nav-item nav-item-has-children" onClick={closeDropdown}>
			<button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={(e) => toggleDropdown(e)}>
				{items.title}

				<motion.i
					variants={animationVariants}
					initial="initial"
					animate="animate"
					className="fas fa-angle-down"
				></motion.i>
			</button>
			{dropdown && <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />}
		</li>
	) : items.title === "Register" ? (
		<li className="nav-item" onClick={closeDropdown}>
			<a href="#register-form" className="aximo-default-btn aximo-header-btn blue-btn2 btn-register hide-for-now" >
				<span className="aximo-label-up">Register Now</span>
				<span className="aximo-label-up">Register Now</span>
			</a>
		</li>
		
	) : (<li className="nav-item" onClick={closeDropdown}><Link to={items.url}>{items.title}</Link></li>);
};

export default NavItem;
