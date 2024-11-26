import React from "react";

function Education() {
  const education = [
    {
      degree: "Grado en Ingeniería de Software",
      institution: "Universidad U-Tad",
      period: "2021 - 2025",
    },
    {
      degree: "Grado Superior en Desarrollo de Aplicaciones",
      institution: "CEU San Pablo",
      period: "2019 - 2021",
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-4">Educación</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-3">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">{edu.degree}</h5>
              <p className="card-text">{edu.institution}</p>
              <p className="card-text">
                <small>{edu.period}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
