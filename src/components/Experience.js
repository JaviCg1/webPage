import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Ingeniero de Software",
      company: "CDS, Hewlett Packard Enterprise",
      period: "Octubre 2023 - Septiembre 2024",
    },
    {
      role: "Desarrollador Java Intern",
      company: "Sia, Grupo Indra",
      period: "Abril 2021 - Julio 2021",
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-4">Experiencia Laboral</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">{exp.role}</h5>
              <p className="card-text">{exp.company}</p>
              <p className="card-text">
                <small>{exp.period}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
