// Hooks
import { useSearch } from "@/hooks/useSearch";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

// Components
import { Link } from "@/config/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

// Icons
import { AlertOctagon, Search } from "lucide-react";

export function Searcher() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const results = useSearch(query, locale);
  const t = useTranslations("searcher");

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
          {t("label")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg mx-auto p-4  sm:p-6 rounded-md shadow-lg">
        <DialogTitle>{t("dialogTitle")}</DialogTitle>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("inputPlaceholder")}
          className="w-full px-3 py-2 rounded-md"
        />
        <div className="my-4 max-h-80 overflow-y-auto py-3">
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
              <Alert variant={"warning"}>
                <AlertOctagon size={16} className="text-yellow-500" />
                <AlertTitle>{t("fallback")}</AlertTitle>
                <AlertDescription className="text-muted-foreground">
                  {t("fallbackDescription")}
                </AlertDescription>
              </Alert>
            )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
