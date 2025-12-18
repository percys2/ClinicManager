import Odontogram from "@/src/components/odontogram/Odontogram";

export default function OdontogramPage({ params }) {
  return (
    <div>
      <h1>Patient {params.patientId}</h1>
      <Odontogram />
    </div>
  );
}
