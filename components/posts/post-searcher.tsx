// React
import { ChangeEvent } from "react";

// Components
import { Input } from "@/components/ui/input";

interface ArticleSearchProps {
  onSearch?: (value: string) => void;
}

export function ArticleSearcher({ onSearch }: ArticleSearchProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="py-10">
      <Input
        placeholder="Search..."
        type="search"
        className="w-56 rounded-full"
        onChange={handleSearch}
      />
    </div>
  );
}
