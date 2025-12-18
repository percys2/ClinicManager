import Link from "next/link";

export default function PatientCard({ patient, clinicSlug }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      <h3>
        {patient.firstName} {patient.lastName}
      </h3>
      <p>{patient.phone}</p>

      <Link href={`/${clinicSlug}/patients/${patient.id}`}>
        View profile →
      </Link>
    </div>
  );
}
