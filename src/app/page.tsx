import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Tools } from "@/components/portfolio/tools";
import { Education } from "@/components/portfolio/education";
import { ReadingList } from "@/components/portfolio/reading-list";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Tools />
        <Education />
        <ReadingList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
