import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-black py-12 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-col">
          {skills.map((skill, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <img className="lg:h-20" src={skill.image} alt={skill.name} />
                <p className="mt-2 text-white text-sm">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
