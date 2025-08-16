"use client";

type Props = {
  className?: string;
  label?: string;
};

export default function PrintButton({
  className = "border rounded-lg px-3 py-2 text-sm",
  label = "Print",
}: Props) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      {label}
    </button>
  );
}
