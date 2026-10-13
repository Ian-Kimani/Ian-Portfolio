import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/case-study/${project.slug}`} className="project-card">
      <div className="project-card__header">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__year">{project.year}</span>
      </div>
      <p className="project-card__summary">{project.summary}</p>
      <div className="project-card__meta">
        {project.stack.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}