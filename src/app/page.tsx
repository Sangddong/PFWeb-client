"use client";
import NavBar from "@/contexts/nav-bar/NavBar";
import AboutMe from "@/sections/aboutMe/AboutMe";
import Comments from "@/sections/comments/Comments";
import Main from "@/sections/main/Main";
import Portfolio from "@/sections/portfolio/Portfolio";
import Sites from "@/sections/sites/Sites";
import Skills from "@/sections/skills/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Main />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Sites />
        <Comments />
      </QueryClientProvider>
    </>
  );
}
