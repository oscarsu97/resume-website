import { useEffect } from "react";
import myPicture from "../Image/profile_pic_2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <img src={myPicture} alt="" data-aos="fade-right" />
        <div className="about-text" data-aos="fade-left">
          <p>
            Hi there! My name is Oscar Su, currently a final year undergraduate
            at National University of Singapore pursuing a degree in computer
            science. In the future, I am aspiring to become a Full-Stack
            developer because I like that I can be involved in the whole product
            development cycle and it put me in a challenging environment to
            grow. As a motivated learner, I actively seek out new courses to
            learn and improve on my skillset during my free time. Aside from
            coding, I do enjoy other things as well such as indulging myself in
            music, going for a run every week and spending time with my family
            and friends to keep myself healthy.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
