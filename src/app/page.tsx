import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navLinks } from "@/data";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navLinks} />
        <Hero />
      </div>
    </div>
  );
}
