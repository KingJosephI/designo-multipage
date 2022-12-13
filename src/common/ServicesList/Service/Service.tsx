import React from 'react';
import { NavLink } from 'react-router-dom';
import rightArrow from '../../../assets/shared/desktop/icon-right-arrow.svg';
import './Service.scss';

interface IService extends React.BaseHTMLAttributes<HTMLDivElement> {
  name?: string;
  url?: string;
  className?: string;
}

const Service = ({
  name = '',
  url = '',
  className = '',
  ...props
}: IService) => {
  return (
    <article className={`service ${className}`} {...props}>
      <h2 className="service__name">{name}</h2>
      <NavLink className="service__view-project-link" to={url}>
        View Projects
        <img
          className="service__arrow"
          src={rightArrow}
          alt="Right Arrow icon"
        />
      </NavLink>
    </article>
  );
};

export default Service;
