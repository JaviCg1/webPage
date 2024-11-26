import React from "react";

function Skills() {
  const skills = ["Java", "Python", "React", "Docker", "AWS"];

  return (
    <div>
      <h2 className="text-center mb-4">Habilidades Técnicas</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body text-center">
                <h5 className="card-title">{skill}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
