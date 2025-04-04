import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    y: -50, // 👈 Move down instead of up
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function FadeInDown({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      // viewport={{ once: true }} // Uncomment if you want it to trigger only once
    >
      {children}
    </motion.div>
  );
}

export default FadeInDown;