import data from "../../../data/data.json";

function Intro() {
	const introData = data.intro;
	return (
		<div className="aximo-hero-section5 bg-navy">
			<div className="container">
				<div className="aximo-hero-content5">
					<h2>
						{introData.title}
					</h2>
					<p>
						{introData.text}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Intro;
