"use client";

import { useState } from "react";

export default function PatientForm({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input name="firstName" placeholder="First name" onChange={handleChange} value={form.firstName} />
      <br />
      <input name="lastName" placeholder="Last name" onChange={handleChange} value={form.lastName} />
      <br />
      <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} />
      <br />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <br />
      <textarea name="notes" placeholder="Notes" onChange={handleChange} value={form.notes} />
      <br />
      <button type="submit">Add patient</button>
    </form>
  );
}
