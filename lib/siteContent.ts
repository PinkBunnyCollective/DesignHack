export const learningPaths: Array<{
  course: string;
  campaign: string;
  title: string;
  description: string;
  progress: 68 | 82;
  points: string[];
}> = [
  {
    course: "IGCSE",
    campaign: "Campaign 01",
    title: "Build exam-ready foundations",
    description:
      "Short modules, visual checks, and scenario questions help students connect theory to real design contexts.",
    progress: 68,
    points: ["Materials and components", "Manufacturing processes", "Product analysis and evaluation"]
  },
  {
    course: "IB DP",
    campaign: "Campaign 02",
    title: "Go deeper into design systems",
    description:
      "Conceptual explanations and guided critique support complex decisions across IA work and written assessment.",
    progress: 82,
    points: ["Human factors and innovation", "Resource management and sustainability", "Detailed design justification"]
  }
];

export const revisionFeatures = [
  {
    label: "Scan",
    title: "Diagnostic checks",
    description: "Find gaps by topic, command term, and confidence level."
  },
  {
    label: "Drill",
    title: "Exam-style drills",
    description: "Build fluency with short responses, analysis prompts, and extended answers."
  },
  {
    label: "Loop",
    title: "Progress loops",
    description: "Replay missed concepts with fresh examples until recall becomes reliable."
  },
  {
    label: "Streak",
    title: "Achievement streaks",
    description: "Keep momentum through goals, badges, checkpoints, and visible growth."
  }
];

export const theoryStats = [
  { value: "Free", label: "theory access" },
  { value: "12", label: "topic sections" },
  { value: "5", label: "case studies" }
];
