"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const router = useRouter();

  const handleSearch = () => {
    if (value.trim()) {
      router.push(`/?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-6">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search location..."
        className="bg-white/10 text-white px-3 py-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-black px-3 py-2 rounded"
      >
        🔍
      </button>
    </div>
  );
}
