import React from 'react';
import './Card.scss';

export default function Card({html}) {
  return (
  <div className="projects__item">
  <iframe src="https://adovg.github.io/spa-bootstrap4-bem/" frameborder="0"></iframe>
  <ul className="project__list">
    <li><i className="fab fa-html5"></i> {html}</li>
    <li><i claclassNamess="fab fa-sass"></i> SCSS</li>
    <li><i className="fab fa-js"></i> JavaScript</li>
    <li><i className="fab fa-gulp"></i> Gulp</li>
    <li> <a target="_blank" href="https://adovg.github.io/spa-bootstrap4-bem/">Watch now</a></li>
  </ul>       
</div>
  )
}
