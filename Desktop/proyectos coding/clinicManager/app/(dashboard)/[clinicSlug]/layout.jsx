import Sidebar from "@/components/layout/Sidebar";


export default function ClinicLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: 24 }}>
        {children}
      </main>
    </div>
  );
}
