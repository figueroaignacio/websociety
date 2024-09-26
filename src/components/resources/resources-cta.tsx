// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
