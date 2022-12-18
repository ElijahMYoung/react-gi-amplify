import React from "react";
import { useState } from "react";
import PersonForm from "./personform";
import Person from "./person";

export default function Hard() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Elijah",
      phone: "704-996-3461",
      email: "eyoung11@r2hstudent.org",
    },
    {
      id: 2,
      name: "Johnny",
      phone: "845-543-4535",
      email: "jguy14@r2hstudent.org",
    },
  ]);
  const handleAddPerson = (name, phone, email) => {
    const person = {
      name,
      phone,
      email,
      id: crypto.randomUUID(),
    };
    setPeople([person, ...people]);
  };
  return (
    <div>
      <h1>Personal Info</h1>
      <PersonForm onAddPerson={handleAddPerson} />
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
}
