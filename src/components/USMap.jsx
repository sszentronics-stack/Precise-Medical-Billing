import React from "react";
import { useNavigate } from "react-router-dom";
import usaMapDimensions from "../data/usaMapDimensions.js";
import { LOCATIONS } from "../data/content.js";

const SERVED = new Map(LOCATIONS.map((loc) => [loc.abbr, loc]));

const USMap = () => {
  const navigate = useNavigate();
  const states = usaMapDimensions();

  const goTo = (loc) => navigate(`/locations/${loc.slug}`);

  return (
    <svg
      viewBox="0 0 959 593"
      className="w-full h-auto"
      role="img"
      aria-label="Map of US states — highlighted states are served by Precise Medical Billing and link to their location page"
    >
      {Object.entries(states).map(([abbr, s]) => {
        const loc = SERVED.get(abbr);
        const served = Boolean(loc);
        return (
          <path
            key={abbr}
            d={s.dimensions}
            className={served ? "us-map-state us-map-state--served" : "us-map-state"}
            tabIndex={served ? 0 : -1}
            role={served ? "link" : undefined}
            aria-label={served ? `${s.name} — ${loc.stat}. View location.` : s.name}
            onClick={() => served && goTo(loc)}
            onKeyDown={(e) => {
              if (served && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                goTo(loc);
              }
            }}
          >
            <title>{served ? `${s.name} — ${loc.stat}` : s.name}</title>
          </path>
        );
      })}
    </svg>
  );
};

export default USMap;
