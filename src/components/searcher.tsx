import { Link } from "@/config/navigation";
import { useSearch } from "@/hooks/useSearch";
import { AlertOctagon, Search } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

const Searcher = () => {
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const results = useSearch(query, locale);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-2"
          onClick={() => setOpen(true)}
          size="sm"
        >
          <Search size={16} />
          Buscar...
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 rounded-md shadow-lg">
        <DialogTitle>Buscar artículos o guías</DialogTitle>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full px-3 py-2 rounded-md"
        />
        <div className="my-4 max-h-80 overflow-y-auto">
          <ul className="space-y-2">
            {results.length > 0 ? (
              results.map((item) => (
                <li key={item.slug} className="border-b pb-2">
                  <Link
                    href={`/${item.slug}`}
                    className="font-semibold flex gap-2"
                    onClick={handleLinkClick}
                  >
                    <p className="underline">{item.title}</p>
                    <Badge variant={"default"}>
                      {item.slug.startsWith("posts/") ? "Artículo" : "Guía"}
                    </Badge>
                  </Link>
                  {item.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </li>
              ))
            ) : (
              <div className="text-sm text-muted-foreground">
                <p className="flex flex-row justify-center items-center gap-3">
                  <AlertOctagon size={16} className="text-yellow-300" />
                  No se encontraron resultados.
                </p>
              </div>
            )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Searcher;
