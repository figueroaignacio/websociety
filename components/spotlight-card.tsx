import { Card, CardTitle } from "@/components/ui/card";
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
        <svg
          className="w-full h-24 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#8f37df"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="wave-path"
          ></path>
        </svg>
      </div>
    </Card>
  );
}
