"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function DaysSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "Yerevan";

  const changeDays = (d: number) => {
    router.push(`/?q=${q}&days=${d}`);
  };

  return (
    <div className="flex gap-2 text-white mb-4 justify-center">
      {[1, 3, 5, 7].map((d) => (
        <button
          key={d}
          onClick={() => changeDays(d)}
          className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
        >
          {d} {d === 1 ? "day" : "days"}
        </button>
      ))}
    </div>
  );
}
