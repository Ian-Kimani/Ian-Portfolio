import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/case-study/${project.slug}`} className="project-card">
      {project.image && (
        <img
          className="project-card__image"
          src={project.image}
          alt={project.altText || `${project.title} project screenshot`}
          loading="lazy"
        />
      )}
      <div className="project-card__header">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__year">{project.year}</span>
      </div>
      <p className="project-card__summary">{project.summary}</p>
      <p className="project-card__status">{project.status}</p>
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