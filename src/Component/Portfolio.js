import computer_vision from "../Image/computer_vision.jpg";
import trip_planner from "../Image/trip_planner.png";
import expense_tracker from "../Image/expense_tracker.png";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <Project
          image={computer_vision}
          link="https://www.dropbox.com/s/u9du168vm5sr4lg/strawberry.mp4?dl=0"
          portfolio_num={0}
        />
        <Project
          image={trip_planner}
          link="https://ay1920s1-cs2103t-t09-1.github.io/main/"
          portfolio_num={2}
        />
        <Project
          image={expense_tracker}
          link="https://github.com/oscarsu97/orbital"
          portfolio_num={1}
        />
      </div>
    </section>
  );
};

export default Portfolio;
