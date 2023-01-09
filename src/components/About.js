import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div className="about-container flex-center">
      <div className="About-wrapper flex-center column">
        <div className="about-text">
        <h2>About.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            commodo congue varius. Vivamus euismod mauris tincidunt dolor porta
            tincidunt.
          </p>
          <br></br>
        </div>
        <div className="about-text">
          <p>
            Cras vel mi finibus, luctus velit a, vestibulum nisl. Nulla
            condimentum erat urna. Aliquam et sem in sem vehicula pretium sit
            amet vitae leo. Morbi at porttitor ligula.
          </p>
        </div>

        <div className="about-text">
        <br></br>
          <p>
            Nam ornare condimentum volutpat. Quisque nec diam sed sem tempus
            tempor non ac metus. Donec vel eros ac risus accumsan posuere non ut
            mi. Maecenas efficitur posuere tellus at lobortis. Morbi in mi
            tempus, imperdiet leo et, feugiat nisl. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed ut diam ex. Fusce varius sit amet
            diam a pharetra. Proin orci magna, efficitur sed interdum sit amet,
            hendrerit at lorem. In eget fermentum nunc, eu lacinia erat. Etiam
            in ullamcorper odio. Nullam non vulputate nibh, id tincidunt lorem.
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
};

export default About;
