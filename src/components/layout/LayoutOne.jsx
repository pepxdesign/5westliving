import { Outlet } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";
function LayoutOne() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutOne;
