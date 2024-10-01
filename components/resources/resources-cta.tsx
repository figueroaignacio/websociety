// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Icons
import { ArrowRight, Code2, Library } from "lucide-react";

export function ResourcesCta() {
  const t = useTranslations("resourcesCta");

  return (
    <Card className="shadow-custom-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{t("description")}</p>
      </CardContent>
      <CardFooter className="flex justify-end w-full">
        <Button className="w-full ">
          <Library className="mr-2 h-4 w-4" />
          <span>{t("button")}</span>
          <ArrowRight
            size={".85rem"}
            className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1"
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
