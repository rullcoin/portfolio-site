import React from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const skills = [
  { name: "react", icon: "devicon-react-original" },
  { name: "javascript", icon: "devicon-javascript-plain" },
  { name: "sass", icon: "devicon-sass-original" },
  { name: "git", icon: "devicon-git-plain" },
  { name: "webpack", icon: "devicon-webpack-plain" },
  { name: "jest", icon: "devicon-jest-plain" },
  { name: "npm", icon: "devicon-npm-original-wordmark" },
  { name: "python", icon: "devicon-python-plain" },

];

const Skill = ({ name, icon, index }) => {
  return (
    <div className="embla__slide">
      <i className={`${icon} colored`}></i>
      <p>{name}</p>
      <span className="skill__index" aria-hidden="true">
        {index}
      </span>
    </div>
  );
};

const Carousel = () => {
  const OPTIONS = { loop: true, dragFree: true };

  const autoplayOptions = {
    delay: 2000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel(OPTIONS, [Autoplay(autoplayOptions)]);

  return (
    <div className="carousel-main flex-center">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
        {skills.map((skill, index) => (
            <Skill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
