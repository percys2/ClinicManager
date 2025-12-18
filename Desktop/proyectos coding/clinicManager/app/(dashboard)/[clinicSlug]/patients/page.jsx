"use client";

import { useParams } from "next/navigation";
import { usePatients } from "@/hooks/usePatients";
import PatientCard from "@/components/patients/PatientCard";
import PatientForm from "@/components/patients/PatientForm";

export default function PatientsPage() {
  const { clinicSlug } = useParams();
  const { patients, loading, addPatient } = usePatients();

  if (loading) return <p>Loading patients...</p>;

  return (
    <div>
      <h1>Patients</h1>

      <PatientForm onSubmit={addPatient} />

      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          clinicSlug={clinicSlug}
        />
      ))}
    </div>
  );
}
