// Components
import { Waves } from "@/components/common/waves";
import { Card, CardTitle } from "@/components/ui/card";

// Icons
import { BookCheck, Code2, Globe, GraduationCap } from "lucide-react";

const iconMap: { [key: string]: JSX.Element } = {
  book: <BookCheck size="2rem" />,
  learn: <GraduationCap size="2rem" />,
  code: <Code2 size="2rem" />,
  resources: <Globe size="2rem" />,
};

export function SpotlightCard({
  spotlight = { title: "Feature", description: "Description", icon: "book" },
}: {
  spotlight?: { title: string; description: string; icon: string };
}) {
  const icon = iconMap[spotlight.icon] || null;

  return (
    <Card className="min-h-96 relative overflow-hidden flex flex-col justify-between p-5 rounded-lg">
      <div className="relative z-10">
        <CardTitle className="max-w-52 mb-4 text-2xl font-bold text-foreground">
          {spotlight.title}
        </CardTitle>
        <p className="text-sm text-foreground mb-6">{spotlight.description}</p>
      </div>
      <div className="relative z-10 self-end mb-8">
        <div className="p-3 rounded-full inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg">
          {icon}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-0">
        <Waves />
      </div>
    </Card>
  );
}
