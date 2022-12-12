import * as React from 'react';
import './Intro.scss';

interface IIntro extends React.BaseHTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const Intro = ({ title, description, ...props }: IIntro) => {
  return (
    <section className="intro" {...props}>
      <h1 className="intro__title">{title}</h1>
      <p className="intro__description">{description}</p>
    </section>
  );
};

export default Intro;
