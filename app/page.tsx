import Image from "next/image";
import Link from "next/link";
import { ProgressMeter } from "@/components/ProgressMeter";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { learningPaths, revisionFeatures, theoryStats } from "@/lib/siteContent";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="relative grid min-h-[calc(100svh-76px)] place-items-end overflow-hidden bg-[#16211d] px-5 py-16 text-white md:px-10">
          <Image
            alt="Design technology students collaborating around sketches, prototypes, and a tablet."
            className="absolute inset-0 -z-10 size-full object-cover"
            fill
            priority
            src="/assets/hero-designhack.png"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#16211d] via-[#16211d]/58 to-[#16211d]/10" />
          <div className="mx-auto grid w-full max-w-6xl gap-7">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#38ffb4]">
              IGCSE & IB DP Design Technology
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-none md:text-8xl">DesignHack</h1>
            <p className="max-w-2xl text-xl leading-8 text-white/82">
              A gamified learning platform that helps design students master theory, sharpen coursework,
              and revise with an AI tutor that knows the syllabus.
            </p>
            <div className="grid max-w-2xl gap-4 rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-white/62">Level 04</span>
                  <strong className="text-lg">Design Thinker</strong>
                </div>
                <span className="font-extrabold text-[#38ffb4]">780 XP</span>
              </div>
              <ProgressMeter label="Learning progress example" value={68} />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="rounded-lg bg-[#38ffb4] px-5 py-3 font-extrabold text-[#062017]" href="/theory">
                Start IGCSE theory
              </Link>
              <Link className="rounded-lg border border-white/22 px-5 py-3 font-extrabold text-white" href="/#coursework">
                Explore coursework support
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:px-10" id="paths">
          <SectionHeading eyebrow="Learning paths" title="Choose the route that matches the course." />
          <div className="grid gap-4 md:grid-cols-2">
            {learningPaths.map((path) => (
              <article className="grid gap-5 rounded-lg border border-[#16211d]/10 bg-white p-6 shadow-sm" key={path.course}>
                <div className="flex items-center justify-between gap-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#1f6f53]">
                  <span>{path.course}</span>
                  <span>{path.campaign}</span>
                </div>
                <h3 className="text-3xl font-extrabold">{path.title}</h3>
                <p className="leading-7 text-[#5f6d67]">{path.description}</p>
                <ProgressMeter label={`${path.course} campaign progress`} value={path.progress} />
                <ul className="grid gap-2 text-sm font-bold text-[#36443e]">
                  {path.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10" id="theory">
          <div className="mx-auto grid max-w-6xl gap-8">
            <SectionHeading eyebrow="Free IGCSE theory" title="Open theory lessons students can read, revise, and apply.">
              <p>
                Start with free-access topic sections built from the syllabus, then move into terminology,
                case-study links, and exam-style practice when students are ready.
              </p>
            </SectionHeading>
            <div className="rounded-lg bg-[#173f55] p-6 text-white shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/62">Free access</span>
                  <strong className="block text-2xl">IGCSE Design & Technology Theory Library</strong>
                </div>
                <Link className="rounded-lg bg-[#1f6f53] px-5 py-3 font-extrabold text-white" href="/theory">
                  Open theory library
                </Link>
              </div>
              <div className="mt-5">
                <ProgressMeter label="IGCSE theory progress" value={100} />
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {theoryStats.map((stat) => (
                  <div className="rounded-lg border border-white/14 p-4" key={stat.label}>
                    <strong className="block text-3xl">{stat.value}</strong>
                    <span className="text-white/72">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:px-10" id="revision">
          <SectionHeading eyebrow="Adaptive revision" title="Practice that changes as students improve." />
          <div className="grid gap-4 md:grid-cols-4">
            {revisionFeatures.map((feature) => (
              <article className="rounded-lg border border-[#16211d]/10 bg-white p-5" key={feature.label}>
                <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#dc684f]">{feature.label}</span>
                <h3 className="mt-4 text-xl font-extrabold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#5f6d67]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#ebe4d6] px-5 py-20 md:px-10" id="coursework">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#dc684f]">Coursework guidance</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                Structure every page with a clearer design argument.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#5f6d67]">
              DesignHack coaches students through identifying a need, researching users, writing
              specifications, developing ideas, prototyping, testing, and evaluating.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
