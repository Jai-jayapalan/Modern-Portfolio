import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center
    flex-col sm:px-10 px-5 overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
