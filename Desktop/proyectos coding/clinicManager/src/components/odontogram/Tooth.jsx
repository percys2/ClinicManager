"use client";

import ToothFaces from "./ToothFaces";

export default function Tooth({ number, faces, onFaceChange, x, y }) {
  return (
    <g>
      <ToothFaces
        x={x}
        y={y}
        faces={faces}
        onFaceClick={(face) => onFaceChange(number, face)}
      />

      <text
        x={x + 16}
        y={y + 48}
        fontSize={10}
        textAnchor="middle"
        fill="#0f172a"
      >
        {number}
      </text>
    </g>
  );
}
