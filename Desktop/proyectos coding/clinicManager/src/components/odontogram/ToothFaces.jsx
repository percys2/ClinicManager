"use client";

import { FACE_COLORS } from "./constants";

export default function ToothFaces({ x, y, faces, onFaceClick }) {
  const size = 32;
  const half = size / 2;

  return (
    <g>
      {/* Occlusal */}
      <rect
        x={x + 8}
        y={y + 8}
        width={16}
        height={16}
        fill={FACE_COLORS[faces.occlusal]}
        stroke="#0f172a"
        onClick={() => onFaceClick("occlusal")}
      />

      {/* Mesial */}
      <rect
        x={x}
        y={y + 8}
        width={8}
        height={16}
        fill={FACE_COLORS[faces.mesial]}
        stroke="#0f172a"
        onClick={() => onFaceClick("mesial")}
      />

      {/* Distal */}
      <rect
        x={x + 24}
        y={y + 8}
        width={8}
        height={16}
        fill={FACE_COLORS[faces.distal]}
        stroke="#0f172a"
        onClick={() => onFaceClick("distal")}
      />

      {/* Buccal */}
      <rect
        x={x + 8}
        y={y}
        width={16}
        height={8}
        fill={FACE_COLORS[faces.buccal]}
        stroke="#0f172a"
        onClick={() => onFaceClick("buccal")}
      />

      {/* Lingual */}
      <rect
        x={x + 8}
        y={y + 24}
        width={16}
        height={8}
        fill={FACE_COLORS[faces.lingual]}
        stroke="#0f172a"
        onClick={() => onFaceClick("lingual")}
      />
    </g>
  );
}
