import Brand1 from "../../assets/images/all/brand-1.png";
import Brand2 from "../../assets/images/all/brand-2.png";
import Brand3 from "../../assets/images/all/brand-3.png";

const brandsData = [
  {
    id: 1,
    name: "Asanti Homes",
    description:
      "​Asanti Homes is a family-owned and operated custom home builder based in Vancouver, British Columbia, with a legacy dating back to 1978. Specializing in new residential homes, multi-family builds, and project management throughout the Lower Mainland, they are renowned for their award-winning design and construction teams.",
    logo: Brand1,
  },
  {
    id: 2,
    name: "Sean Stevens",
    description:
      "Sean Stevens is a Vancouver-based REALTOR® with Macdonald Realty, specializing in character homes, heritage retention, and responsible residential development across the Lower Mainland. He leads the Sean Stevens Personal Real Estate Corporation, offering a client-focused, transparent approach to real estate.",
    logo: Brand2,
  },
  {
    id: 3,
    name: "Architectural Collective Inc.",
    description:
      "ARCHITECTURAL COLLECTIVE INC. is dedicated to providing quality architectural services to clients. Typical commissions include Residential Multi-family, Heritage and Character Retention, Residential Custom Single Family, Renovations, Commercial projects, and Tenant Improvements. Key to the practice is bringing value and vision to clients' goals and providing experience and commitment to integrated design that is economical and environmentally sustainable.",
    logo: Brand3,
    desc2:
      "From contemporary to Craftsman West Coast architecture, the firm provides designs that speak to clients' needs and interests with best practices in mind and execution. Experience is provided to help clients make informed choices in development needs and goals early in the decision-making process with a commitment to user-focused design.",
  },
];

function TeamGrid() {
  return (
    <div className="aximo-hero-section5">
      <div className="container">
        <div className="aximo-hero-content5 team-grid-header">
          <h2>Great Partners in Design, Build, and Real Estate</h2>
          <p>
            Behind every exceptional project is a team of passionate experts,
            each bringing unique strengths and deep local knowledge to the
            table. From groundbreaking architecture and thoughtful home
            construction to personalized real estate guidance, our team works
            collaboratively to turn ideas into enduring spaces
          </p>
        </div>
        <div className="row">
          <div className="team-grid-container">
            {brandsData.map((brand, index) => (
              <div key={index} className="grid-row">
                <div className="logo-wrapper">
                  <img src={brand.logo} alt={brand.name} />
                </div>
                <div className="brand-description">
                  <p>{brand.description}</p>
                  {brand.desc2 && <p>{brand.desc2}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamGrid;
