// React
import { ChangeEvent } from "react";

// Components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "./ui/input";

interface ArticleSearchProps {
  onSearch?: (value: string) => void;
}

export function ArticleSearch({ onSearch }: ArticleSearchProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="py-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Input
              placeholder="Search..."
              type="search"
              className="w-56 rounded-full"
              onChange={handleSearch}
            />
          </TooltipTrigger>
          <TooltipContent>Search articles</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
