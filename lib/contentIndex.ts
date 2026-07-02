import fs from "node:fs";
import path from "node:path";

const theorySheetDirectory = path.join(process.cwd(), "content", "igcse", "theory-sheets");

function titleFromMarkdown(markdown: string, fallback: string) {
  const frontMatterTitle = markdown.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1];
  const blueprintTitle = markdown.match(/^# Topic:\s*(.+)$/m)?.[1];
  const firstHeading = markdown.match(/^#\s+(.+)$/m)?.[1];
  return frontMatterTitle || blueprintTitle || firstHeading || fallback;
}

function syllabusRefsFromMarkdown(markdown: string) {
  const frontMatterRefs = markdown.match(/^syllabus_refs:\s*\[(.+?)\]\s*$/m)?.[1];
  if (frontMatterRefs) {
    return frontMatterRefs
      .split(",")
      .map((ref) => ref.replace(/["']/g, "").trim())
      .filter(Boolean);
  }

  const blueprintSyllabus = markdown.match(/\*\*Syllabus:\*\*\s*(.+)$/m)?.[1];
  if (blueprintSyllabus) {
    return blueprintSyllabus
      .split("/")
      .map((ref) => ref.trim().split(" ")[0])
      .filter(Boolean);
  }

  return [];
}

function labelFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export type TheoryTopicSummary = {
  slug: string;
  title: string;
  syllabusRefs: string[];
};

export function getTheoryTopicSummaries(): TheoryTopicSummary[] {
  if (!fs.existsSync(theorySheetDirectory)) return [];

  return fs
    .readdirSync(theorySheetDirectory)
    .filter((file) => file.endsWith(".md") && file !== "README.md")
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const markdown = fs.readFileSync(path.join(theorySheetDirectory, file), "utf8");
      return {
        slug,
        title: titleFromMarkdown(markdown, labelFromSlug(slug)),
        syllabusRefs: syllabusRefsFromMarkdown(markdown)
      };
    })
    .sort((a, b) => {
      const aRef = a.syllabusRefs[0] || "999";
      const bRef = b.syllabusRefs[0] || "999";
      return aRef.localeCompare(bRef, undefined, { numeric: true });
    });
}
