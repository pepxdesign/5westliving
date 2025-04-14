import React, { useState } from "react";
import FloorplanCard from "./FloorplanCard";
import { AnimatePresence } from "framer-motion";
import FP1Img from "../../../assets/images/all/2432.svg";
import FP2Img from "../../../assets/images/all/2452.svg";
import FP3Img from "../../../assets/images/all/2438.svg";
import FP4Img from "../../../assets/images/all/2436.svg";
import FP5Img from "../../../assets/images/all/2430.svg";

function FloorplanSelector() {
  const floorplansDetailsData = {
    subtitle: "",
    title: "Designed for the Way You Live",
    text: "Our floorplans go beyond layout, offering an elevated living experience where function meets beauty. Whether you're hosting friends in a spacious open-concept kitchen or unwinding with a view, these residences are designed to adapt, grow, and move with you.",
  };

  const floorplans = [
    {
      id: 1,
      collection: "Garden Homes",
      unit: "2432 West 49th Avenue",
      bedrooms: "1 Bedroom",
      bedroomsUnit: 1,
      sqft: 587,
      description:
        "A thoughtfully designed one-bedroom Garden Home, perfect for singles or couples seeking a stylish and efficient layout with private outdoor space.",
      image: FP1Img,
      alt: "2432 1 Bedroom Floorplan"
    },
    {
      id: 2,
      collection: "Garden Homes",
      unit: "2452 West 49th Avenue",
      bedrooms: "3 Bedroom",
      bedroomsUnit: 3,
      sqft: 1155,
      description:
        "Spacious and bright, this three-bedroom Garden Home offers ample living space and a seamless connection to nature, ideal for growing families or those who love to entertain.",
      image: FP2Img,
      alt: "2452 3 Bedroom Floorplan"
    },
    {
      id: 3,
      collection: "Townhomes",
      unit: "2438 West 49th Avenue",
      bedrooms: "3 Bedroom",
      bedroomsUnit: 3,
      sqft: 1593,
      description:
        "Experience elevated townhome living in this three-bedroom residence featuring an open-concept main floor, expansive windows, and refined modern finishes.",
      image: FP3Img,
      alt: "2438 3 Bedroom Floorplan"
    },
    {
      id: 4,
      collection: "Townhomes",
      unit: "2436 West 49th Avenue",
      bedrooms: "4 Bedroom",
      bedroomsUnit: 4,
      sqft: 1651,
      description:
        "A rare four-bedroom townhome offering generous square footage, multiple levels of living, and flexible space for families or remote work setups.",
      image: FP4Img,
      alt: "2436 4 Bedroom Floorplan"
    },
    {
      id: 5,
      collection: "Detached Townhomes",
      unit: "2430 West 49th Avenue",
      bedrooms: "3 Bedroom",
      bedroomsUnit: 3,
      sqft: 1471,
      description:
        "Enjoy the privacy of a detached home with the convenience of townhome living in this beautifully crafted three-bedroom residence, complete with premium finishes and a private entrance.",
      image: FP5Img,
      alt: "2430 3 Bedroom Floorplan"
    },
  ];

  const filters = [
    { label: "Garden Homes", type: "collection" },
    { label: "Townhomes", type: "collection" },
    { label: "Detached Townhomes", type: "collection" },
    { label: "1 Bedroom", type: "bedrooms" },
    { label: "3 Bedroom", type: "bedrooms" },
    { label: "4 Bedroom", type: "bedrooms" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const filteredFloorplans = selectedFilter
    ? floorplans.filter(
        (fp) => fp[selectedFilter.type] === selectedFilter.label
      )
    : floorplans;

  return (
    <div className="section aximo-content-section location-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center">
            <div className="aximo-default-content libre-font location-content-padding">
              <h2>{floorplansDetailsData.title}</h2>
              <p>{floorplansDetailsData.text}</p>
            </div>
          </div>
        </div>

        <div className="floorplan-selector-container">
          <div className="filter-options">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedFilter(filter);
                }}
                className={`aximo-default-btn aximo-pricing-btn ${
                  selectedFilter?.label === filter.label ? "selected" : ""
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="floorplan-results">
            <AnimatePresence>
              {filteredFloorplans.map((plan, index) => (
                <FloorplanCard key={index} plan={plan} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorplanSelector;
