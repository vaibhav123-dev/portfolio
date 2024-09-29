import WomanImg from "../assets/img/banner-women2.png";
import resume from "../assets/Vaibhav-Darvekar.pdf";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-teal-300 font-bold text-md mb-[22px]">
              Hey, I&apos;m Vaibhav! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] md:tracking-[-2px] text-white">
              I Build <br /> Full Stack Web Apps.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I have over 2 years of hands-on experience in designing and
              developing dynamic web applications using the MERN stack (MongoDB,
              Express.js, React, and Node.js). My expertise lies in building
              scalable, user-centric solutions that deliver seamless performance
              and exceptional user experiences
            </p>

            <a
              href={resume}
              className="btn btn-md bg-cyan-700 hover:bg-secondary-hover transition-all"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img className="bg-black" src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
