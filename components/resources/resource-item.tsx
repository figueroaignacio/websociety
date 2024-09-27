// Components
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

// Types
import { Resources as ResourcesTypes } from "@content";

// Icons
import { ReactNode } from "react";

interface ResourceItemProps {
  icon: ReactNode;
  resource: ResourcesTypes;
}

export function ResourceItem({ icon, resource }: ResourceItemProps) {
  return (
    <Card className="rounded-lg text-center gradient-background text-white">
      <CardHeader className="justify-center items-center">
        <div className="w-16 h-16 rounded-full gradient-background flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{resource.title}</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white">
          {resource.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
