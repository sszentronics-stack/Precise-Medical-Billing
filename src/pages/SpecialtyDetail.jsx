import React from "react";
import { useParams, Link } from "react-router-dom";
import { SPECIALTIES } from "../data/content.js";
import SubpageTemplate from "./SubpageTemplate.jsx";

const SpecialtyDetail = () => {
  const { slug } = useParams();
  const specialty = SPECIALTIES.find((s) => s.slug === slug);

  if (!specialty) {
    return (
      <div className="pt-32 pb-24 text-center">
        <p className="text-[var(--muted)]">
          We couldn't find that specialty.{" "}
          <Link to="/specialties" className="text-[var(--navy)] font-semibold underline">
            See all specialties
          </Link>
        </p>
      </div>
    );
  }

  return (
    <SubpageTemplate
      kind="Specialty"
      title={specialty.title}
      tagline={specialty.tagline}
      heroStat={specialty.heroStat}
      benefits={specialty.benefits}
      faqs={specialty.faqs}
    />
  );
};

export default SpecialtyDetail;
