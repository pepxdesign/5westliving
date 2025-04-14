
import { Link } from "react-router-dom";
import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="container">
				<div className="aximo-footer-top4">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea light-one">
								<Link to="/">
									<img src={LogoWhiteImg} alt="5Westliving Logo" />
								</Link>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu extar-margin light-one">
								<div className="aximo-footer-title light-one">
									<p>Links</p>
								</div>
								<ul>
									<li>
										<Link to="/design">Design</Link>
									</li>
									<li>
										<Link to="/location">Location</Link>
									</li>
									<li>
										<Link to="/floorplans">Floorplans</Link>
									</li>
									<li>
										<Link to="/team">Team</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu light-one m-0">
								<div className="aximo-footer-title light-one">
									<p>Contact us</p>
								</div>
								<div className="aximo-contact-info2">
									<ul>
										<li>
											<a href="tel: 604-558-3466">
												P: (604)558-3466
											</a>
										</li>
										<li>
											<a href="mailto:sales@asantihomes.com">
												E: sales@asantihomes.com
											</a>
										</li>
										<li>
											<p>
												2438 W 49th Ave Vancouver, BC V6M 2V3
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="aximo-footer-menu light-one">
								<div className="aximo-footer-title light-one">
									<p>Follow Us</p>
								</div>
								<ul>
									<li>
										<a href="https://www.instagram.com/asanti.homes" target="_blank">Instagram</a>
									</li>
									<li>
										<a href="https://www.facebook.com/profile.php?id=61572491757829" target="_blank">Facebook</a>
									</li>	
								</ul>
							</div>
						</div>
					</div>
				</div>



				<div className="disclaimer">
					<p>In our continuing effort to improve and maintain the high standard of Asanti Homes, the Builder reserves the right to modify or change plans, specifications, features, and prices without notice. Materials may be substituted with equivalent or better at the developer’s sole discretion. All dimensions and sizes are approximate and are based on preliminary survey measurements. As reverse plans occur throughout the development, please see architectural plans. Renderings are an artist’s conception and are intended as a general reference only. E. & O.E. Sales and Marketing provided by Sean Stevens Real Estate Group.</p>
				</div>


				<div className="aximo-copywright one">
						<p> &copy; 2025 Asanti Homes.
						</p>
						<span>   |   </span>
						<Link to="/privacy-policy">Privacy Policy</Link>
				</div>
				
			</div>
		</>
	);
}

export default FooterBottom;
