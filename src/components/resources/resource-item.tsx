// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

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
    <Card className="rounded-lg text-center">
      <CardHeader className="justify-center items-center">
        <div className="mb-4 border-2 p-4 rounded-full border-dashed">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{resource.title}</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {resource.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
