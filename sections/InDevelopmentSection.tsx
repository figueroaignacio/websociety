// Components
import { BackButton } from "@/components/back-button";

// Icons
import { Rocket } from "lucide-react";

// Constants
import { inDevelopmentSection } from "@/config/errors";

export function InDevelopmentSection() {
  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 text-center border-2 rounded-md p-16 border-dashed">
        <div className="border-2 rounded-full p-3">
          <Rocket size="1.5rem" />
        </div>
        <div>
          <p className="opacity-75">{inDevelopmentSection.description}</p>
        </div>
        <BackButton title="Go Back" />
      </div>
    </section>
  );
}
