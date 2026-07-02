import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.7fr)] md:items-end">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#dc684f]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#16211d] md:text-5xl">{title}</h2>
      </div>
      {children ? <div className="text-lg leading-8 text-[#5f6d67]">{children}</div> : null}
    </div>
  );
}
