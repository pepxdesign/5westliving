import { motion } from "framer-motion";

function FloorplanCard({ plan }) {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.1 }}
      className="floorplan-card"
    >
      <div className="floorplan-img-wrapper">
        <img src={plan.image} alt={plan.description} className="w-full" />
      </div>
      <div className="floorplan-details">
        <h3>{plan.unit}</h3>
        <p>{plan.description}</p>
        <div className="parameters">
          <div>
            <p>{plan.sqft} <span>sq ft</span></p>
            <span className="aximo-subtitle">Apartment Area</span>
          </div>
          <div>
            <p>{plan.bedroomsUnit}</p>
            <span className="aximo-subtitle">Bedrooms</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FloorplanCard;
