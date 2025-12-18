"use client";

import { useEffect, useState } from "react";
import { getPatientById } from "@/services/patients.service";

export default function PatientProfile({ params }) {
  const { patientId } = params;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    getPatientById(patientId).then(setPatient);
  }, [patientId]);

  if (!patient) return <p>Loading patient...</p>;

  return (
    <div>
      <h1>
        {patient.firstName} {patient.lastName}
      </h1>

      <p>📞 {patient.phone}</p>
      <p>📧 {patient.email}</p>
      <p>📝 {patient.notes}</p>
    </div>
  );
}
