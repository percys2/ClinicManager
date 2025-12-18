"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Sidebar() {
  const { clinicSlug } = useParams();

  const menu = [
    { label: "Dashboard", path: "dashboard" },
    { label: "Appointments", path: "appointments" },
    { label: "Patients", path: "patients" },
    { label: "Billing", path: "billing" },
    { label: "Reports", path: "reports" },
    { label: "Staff", path: "staff" },
    { label: "Settings", path: "settings" },
  ];

  return (
    <aside
      style={{
        width: 220,
        background: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <h2 style={{ marginBottom: 30 }}>🦷 Dental SaaS</h2>

      <nav>
        {menu.map((item) => (
          <div key={item.path} style={{ marginBottom: 12 }}>
            <Link
              href={`/${clinicSlug}/${item.path}`}
              style={{ color: "#e5e7eb", textDecoration: "none" }}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
