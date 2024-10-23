// React
import { ReactNode } from "react";

// Components
import { Card, CardTitle } from "@/components/ui/card";

// Types
import { Resources as ResourcesTypes } from "@content";

interface ResourceItemProps {
  icon: ReactNode;
  resource: ResourcesTypes;
}

export function ResourceItem({ icon, resource }: ResourceItemProps) {
  return (
    <Card className="min-h-60 relative overflow-hidden flex flex-col justify-between p-5 rounded-lg">
      <div className="relative z-10">
        <CardTitle className="max-w-52 mb-4 text-2xl font-bold text-foreground">
          {resource.title}
        </CardTitle>
        <p className="text-sm text-foreground mb-6">{resource.description}</p>
      </div>
      <div className="relative z-10 self-end">
        <div className="p-3 rounded-full inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg transition-transform duration-300 transform hover:scale-105">
          {icon}
        </div>
      </div>
    </Card>
  );
}
