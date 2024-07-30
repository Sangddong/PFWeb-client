import NavBar from "@/contexts/nav-bar/NavBar";
import AboutMe from "@/sections/aboutMe/AboutMe";
import Comments from "@/sections/comments/Comments";
import Main from "@/sections/main/Main";
import Portfolio from "@/sections/portfolio/Portfolio";
import Skills from "@/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
}
