import useScrollPosition from "../../../hooks/useScrollPosition";
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
// import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
// import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	const scroll = useScrollPosition();

	return (
		<header
			className={`site-header aximo-header-section aximo-header7 ${scroll ? "sticky-menu" : ""}`}
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo scroll={scroll} />
					<div className="menu-block-wrapper">
						<DesktopNav>
							{/* <NavItem url="about-us">Design</NavItem> */}
							<NavItem url="#">Design</NavItem>
							<NavItem url="#">Location</NavItem>
							<NavItem url="#">Floorplans</NavItem>
							<NavItem url="#">Teams</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
