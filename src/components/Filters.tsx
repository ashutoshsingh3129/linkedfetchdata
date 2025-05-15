// components/Filters.tsx
import React from "react";

interface Props {
  filters: {
    onlyOriginal: boolean;
    onlyReshared: boolean;
    onlyWithVideo: boolean;
  };
  setFilters: (filters: any) => void;
}

export default function Filters({ filters, setFilters }: Props) {
  const handleChange = (key: string) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex gap-4 flex-wrap my-4">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={filters.onlyOriginal} onChange={() => handleChange("onlyOriginal")} />
        Only Original
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={filters.onlyReshared} onChange={() => handleChange("onlyReshared")} />
        Only Reshared
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={filters.onlyWithVideo} onChange={() => handleChange("onlyWithVideo")} />
        Only With Video
      </label>
    </div>
  );
}
