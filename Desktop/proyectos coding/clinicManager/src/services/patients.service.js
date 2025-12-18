// MOCK DATA (replace with DB later)
let patients = [
  {
    id: "1",
    firstName: "Juan",
    lastName: "Perez",
    phone: "8888-1111",
    email: "juan@email.com",
    notes: "No allergies",
  },
  {
    id: "2",
    firstName: "Maria",
    lastName: "Lopez",
    phone: "7777-2222",
    email: "maria@email.com",
    notes: "Diabetic",
  },
];

export function getPatients() {
  return Promise.resolve(patients);
}

export function getPatientById(id) {
  return Promise.resolve(patients.find((p) => p.id === id));
}

export function createPatient(data) {
  const newPatient = {
    id: Date.now().toString(),
    ...data,
  };
  patients.push(newPatient);
  return Promise.resolve(newPatient);
}
