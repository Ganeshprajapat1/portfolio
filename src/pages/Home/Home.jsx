import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <section>Experience</section>
      <section>Projects</section>
      <section>Education</section>
      <section>Contact</section>
    </>
  );
};

export default Home