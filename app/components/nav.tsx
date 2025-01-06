"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/resume": {
    name: "Resume",
  },
  "/contact": {
    name: "Contact",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const handlePrint = () => {
    window.print();
  };
  const currentRoute = usePathname();

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight no-print z-50">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col space-y-5 md:space-y-1 md:flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-end md:items-center justify-between w-full" // Ensure width is 100%
          id="nav"
        >
          <div className="flex flex-row space-x-0 md:space-x-3 md:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all z-50 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-2 px-2 md:px-4" // Increased padding for better consistency
                >
                  {name}
                </Link>
              );
            })}
          </div>
          {currentRoute === "/resume" && (
            <div
              className="border-solid border-2 border-slate-500 p-2 rounded-md hover:bg-slate-800 hover:text-white hover:cursor-pointer flex gap-1.5"
              onClick={handlePrint}
            >
              print <span>🖨️</span>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
}