import React from "react";
import "./style.css"


const Project = ({title, img}) => {
  return (
    <li className="project">
      <a href="./project/project-page1.html">
        <img
          src={img}
          alt={title}
          className="project__img"
        />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default Project;