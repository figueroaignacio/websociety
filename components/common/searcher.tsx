// Hooks
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";

// Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "@/config/navigation";

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
          className="flex justify-start gap-2 py-5"
          onClick={() => setOpen(true)}
          size="sm"
        >
          <Search size={16} />
          {t("label")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg mx-auto p-4 sm:p-6 rounded-md shadow-lg">
        <DialogDescription>{t("dialogTitle")}</DialogDescription>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("inputPlaceholder")}
          className="w-full px-3 py-2 rounded-md"
        />
        <div className="my-4 max-h-80 overflow-y-auto">
          <ul className="space-y-4">
            {results.length > 0 ? (
              results.map((item) => (
                <li key={item.slug} className=" p-4">
                  <Link
                    href={`/${item.slug}`}
                    className="font-semibold flex gap-2"
                    onClick={handleLinkClick}
                  >
                    <p className="underline">{item.title}</p>
                    <Badge variant={"default"}>
                      {item.slug.startsWith("posts/")
                        ? `${t("badges.post")}`
                        : `${t("badges.guide")}`}
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
