"use client";

import { useEffect, useState } from "react";
import {
  getPatients,
  createPatient,
} from "@/services/patients.service";

export function usePatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPatients().then((data) => {
      setPatients(data);
      setLoading(false);
    });
  }, []);

  const addPatient = async (patient) => {
    const newPatient = await createPatient(patient);
    setPatients((prev) => [...prev, newPatient]);
  };

  return {
    patients,
    loading,
    addPatient,
  };
}
