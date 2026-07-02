import Link from "next/link";

const navigation = [
  { href: "/#paths", label: "Paths" },
  { href: "/theory", label: "Theory" },
  { href: "/#coursework", label: "Coursework" },
  { href: "/#revision", label: "Revision" },
  { href: "/#teachers", label: "Teachers" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#f6f3ec]/90 px-5 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5">
        <Link className="flex items-center gap-3 text-xl font-extrabold" href="/">
          <span className="grid size-11 place-items-center rounded-lg border border-emerald-900/15 bg-[#1f6f53] text-white shadow-sm">
            D
          </span>
          <span>DesignHack</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-[#5f6d67] md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className="transition hover:text-[#16211d]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="hidden rounded-lg bg-[#1f6f53] px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#104a38] md:inline-flex"
          href="/#start"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
