"use client";

// React
import { ChangeEvent } from "react";

// Components
import { Input } from "@/components/ui/input";

interface PostsSearchProps {
  onSearch?: (value: string) => void;
}

export function PostsSearcher({ onSearch }: PostsSearchProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="py-4 flex items-center gap-3">
      <Input
        placeholder="Search..."
        type="search"
        className="w-56"
        onChange={handleSearch}
      />
    </div>
  );
}
