type ProgressMeterProps = {
  value: 68 | 82 | 100;
  label: string;
};

const progressWidths = {
  68: "w-[68%]",
  82: "w-[82%]",
  100: "w-full"
};

export function ProgressMeter({ value, label }: ProgressMeterProps) {
  return (
    <div aria-label={label} className="h-3 overflow-hidden rounded-full bg-[#e8dfcf]">
      <span
        className={`block h-full rounded-full bg-gradient-to-r from-[#38ffb4] via-[#5bc7ff] to-[#ff5ad9] ${progressWidths[value]}`}
      />
    </div>
  );
}
