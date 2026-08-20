import React from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICES } from "../data/content.js";
import SubpageTemplate from "./SubpageTemplate.jsx";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center">
        <p className="text-[var(--muted)]">
          We couldn't find that service.{" "}
          <Link to="/services" className="text-[var(--navy)] font-semibold underline">
            See all services
          </Link>
        </p>
      </div>
    );
  }

  return (
    <SubpageTemplate
      kind="Service"
      title={service.title}
      tagline={service.tagline}
      heroStat={service.heroStat}
      benefits={service.benefits}
      faqs={service.faqs}
    />
  );
};

export default ServiceDetail;
