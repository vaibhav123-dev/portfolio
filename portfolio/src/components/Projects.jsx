import { useState, useEffect } from "react";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([
    {
      name: "Task-Me",
      img: "https://github.com/user-attachments/assets/5eaa8474-0f9c-400a-9983-cc7007f07741",
      feature:
        "A full-stack project called Task Manager using React, Redux, Express.js, MongoDB, and Tailwind CSS. This application allows admins to manage and assign tasks to employees, track their progress, and modify tasks",
      Link: "https://task-manager-app-client-olive.vercel.app/",
      Github: "https://github.com/vaibhav123-dev/Task-Manager-App",
    },
    {
      name: "Klimate",
      img: "https://github.com/user-attachments/assets/1d662400-dd55-42b2-89ca-359caead8bd3",
      feature:
        "A responsive weather application offering real-time weather updates, forecasts, and insights, built using React js, Tailwind css, Openweather Api, ShadCN Ui, React Query.",
      Link: "https://klimateweather.vercel.app/",
      Github: "https://github.com/vaibhav123-dev/climate",
    },
    {
      name: "Portfolio Website",
      img: "https://user-images.githubusercontent.com/93373467/183902755-f334ba41-b7d6-4e8a-88a8-ba23e1070914.gif",
      feature:
        "Portfolio website where user can see my projects and skills. Built Using React, Tailwind Css, Framer Motion Swiper Js, React Scroll",
      Link: "https://vaibhav-darvekar-portfolio.vercel.app/",
      Github: "https://github.com/vaibhav123-dev/portfolio-website",
    },
    {
      name: "ToDo App",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/todogif.fd727e07.gif",
      feature: "Todo Application made with ReactJs. Tech-stack : [React] ",
      Link: "https://todo-app-vab-devv.netlify.app/",
      Github: "https://github.com/vaibhav123-dev/Todo-app-react-js",
    },
    {
      name: "E-commerce Website",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/bellavitagif.5916a95a.gif",
      feature:
        "Fully functional E-commerce website where user can signin and buy products. Tech-stack : [HTML,CSS,JavaScript,NodeJs,MongoDb,ExpressJs]",
      Link: "https://bellavitaorganic-cloned.herokuapp.com/",
      Github:
        "https://github.com/vaibhav123-dev/Bella_Vita_Organic_Clone_Backend",
    },
    {
      name: "E-commerce Website",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/plumgoodness.de00e664.png",
      feature:
        "Frontend E-commerce website where user can signin and buy products with dummy payment. Tech-stack : [HTML,CSS,JavaScript]",
      Link: "https://plumgoodness-clone.netlify.app/",
      Github: "https://github.com/vaibhav123-dev/Clone-of-plumgoodness.com",
    },
    {
      name: "Movie Website",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/moviegif.72206402.gif",
      feature:
        "Simple movie application where user can search for movie and get details. Teck-stack : [HTML,CSS,JavaScript]",
      Link: "https://nightowl-movie-app.netlify.app/",
      Github: "https://github.com/vaibhav123-dev/Movie-app",
    },
  ]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      // setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
