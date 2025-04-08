import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


import locImg1 from "../../../assets/images/all/loc-1.jpg";
import locImg2 from "../../../assets/images/all/loc-2.jpg";
import locImg3 from "../../../assets/images/all/loc-3.jpg";
import locImg4 from "../../../assets/images/all/loc-4.jpg";
import locImg5 from "../../../assets/images/all/loc-5.jpg";
import locImg6 from "../../../assets/images/all/loc-6.jpg";

const galleryItems = [
  {
    src: locImg1,
    text: "Ajisai Sushi Bar",
  },
  {
    src: locImg2,
    text: "VanDusen Botanical Garden",
  },
  {
    src: locImg3,
    text: "Maple Grove Park",
  },
  {
    src: locImg4,
    text: "Okini Restaurant & Bar",
  },
  {
    src: locImg5,
    text: "Marine Drive Golf Club",
  },
  {
    src: locImg6,
    text: "41st Ave",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GalleryItem = ({ src, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="gallery-item"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <img src={src} alt={text} className="gallery-image" />
      {/* <p className="gallery-text"></p> */}
      <span class="aximo-subtitle">{text}</span>
    </motion.div>
  );
};

const MasonryGallery = () => {
  return (
    <div className="aximo-hero-section5">
      <div className="container">
        <div className="aximo-hero-content5 team-grid-header">
          <h2>
            Discover Kerrisdale: Lifestyle Hotspots Just Steps from Your Door
          </h2>
          <p>
            Kerrisdale isn’t just a place to live—it’s a lifestyle. This vibrant
            West Side neighbourhood blends timeless charm with modern
            convenience, offering everything from top-rated schools and artisan
            cafes to scenic greenways and boutique shopping. Whether you're
            raising a family, settling into retirement, or just looking for that
            perfect balance between city life and community warmth, Kerrisdale
            delivers.
          </p>
        </div>
        <div className="row">
          <div className="gallery-container">
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} src={item.src} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
