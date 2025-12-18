export default function DashboardPage({ params }) {
  return (
    <div>
      <h1>Clinic: {params.clinicSlug}</h1>
      <p>Welcome to your dental dashboard</p>
    </div>
  );
}
