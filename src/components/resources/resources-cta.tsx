import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code2, Library } from "lucide-react";

export function ResourcesCta() {
  return (
    <Card className="shadow-custom-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          Web Dev Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Discover a treasure trove of curated resources for web developers.
          Boost your skills and stay up-to-date with the latest tools and
          technologies.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end w-full">
        <Button className="w-full ">
          <Library className="mr-2 h-4 w-4" /> Explora los recursos
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
