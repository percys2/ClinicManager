"use client";

import { useState } from "react";
import Tooth from "./Tooth";
import { UPPER_TEETH, LOWER_TEETH, TOOTH_FACES } from "./constants";

const emptyFaces = {
  occlusal: "healthy",
  mesial: "healthy",
  distal: "healthy",
  buccal: "healthy",
  lingual: "healthy",
};

export default function Odontogram() {
  const [teeth, setTeeth] = useState({});

  const cycle = (state) =>
    state === "healthy" ? "caries" : state === "caries" ? "filling" : "healthy";

  const handleFaceChange = (toothNumber, face) => {
    setTeeth((prev) => ({
      ...prev,
      [toothNumber]: {
        ...(prev[toothNumber] || emptyFaces),
        [face]: cycle(prev[toothNumber]?.[face] || "healthy"),
      },
    }));
  };

  return (
    <div>
      <h2>Odontogram (Tooth Faces)</h2>

      <svg width="900" height="300">
        {/* Upper */}
        {UPPER_TEETH.map((tooth, i) => (
          <Tooth
            key={tooth}
            number={tooth}
            x={i * 40 + 40}
            y={40}
            faces={teeth[tooth] || emptyFaces}
            onFaceChange={handleFaceChange}
          />
        ))}

        {/* Lower */}
        {LOWER_TEETH.map((tooth, i) => (
          <Tooth
            key={tooth}
            number={tooth}
            x={i * 40 + 40}
            y={160}
            faces={teeth[tooth] || emptyFaces}
            onFaceChange={handleFaceChange}
          />
        ))}
      </svg>

      <pre style={{ marginTop: 20 }}>
        {JSON.stringify(teeth, null, 2)}
      </pre>
    </div>
  );
}
