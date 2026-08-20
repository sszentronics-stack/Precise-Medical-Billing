import React from "react";
import { useParams, Link } from "react-router-dom";
import { LOCATIONS } from "../data/content.js";
import SubpageTemplate from "./SubpageTemplate.jsx";

const LocationDetail = () => {
  const { slug } = useParams();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="pt-32 pb-24 text-center">
        <p className="text-[var(--muted)]">
          We couldn't find that location.{" "}
          <Link to="/locations" className="text-[var(--navy)] font-semibold underline">
            See all locations
          </Link>
        </p>
      </div>
    );
  }

  return (
    <SubpageTemplate
      kind="Location"
      title={`Medical Billing in ${location.title}`}
      tagline={location.tagline}
      heroStat={location.heroStat}
      benefits={location.benefits}
      faqs={location.faqs}
    />
  );
};

export default LocationDetail;
