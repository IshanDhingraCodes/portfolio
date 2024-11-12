import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <div>
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "About",
            link: "/",
          },
          {
            name: "Projects",
            link: "/",
          },
        ]}
      />
    </div>
  );
}
