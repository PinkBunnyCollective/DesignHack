import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getTheoryTopicSummaries } from "@/lib/contentIndex";

export const metadata = {
  title: "IGCSE Theory Library",
  description: "Browse DesignHack IGCSE Design & Technology theory topics generated from Markdown."
};

export default function TheoryPage() {
  const topics = getTheoryTopicSummaries();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#10251f] px-5 py-14 text-white md:px-10">
        <section className="mx-auto grid max-w-6xl gap-8">
          <div className="grid gap-4">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#38ffb4]">Free IGCSE theory</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">Theory Library</h1>
            <p className="max-w-3xl text-lg leading-8 text-white/72">
              Phase 1 establishes the Next.js route shell. The topic index below is read from the
              Markdown folder so Phase 2 can attach the full reusable content renderer without
              duplicating educational content in React.
            </p>
          </div>

          <div className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/48">
                  Markdown source
                </span>
                <strong className="block text-2xl">{topics.length} topic sheets detected</strong>
              </div>
              <Link className="rounded-lg bg-[#38ffb4] px-4 py-2 font-extrabold text-[#062017]" href="/">
                Back to home
              </Link>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {topics.map((topic) => (
                <article className="rounded-lg border border-white/10 bg-white/[0.08] p-4" key={topic.slug}>
                  <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#38ffb4]">
                    {topic.syllabusRefs.length ? topic.syllabusRefs.join(", ") : "Syllabus pending"}
                  </span>
                  <h2 className="mt-2 text-xl font-extrabold">{topic.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
