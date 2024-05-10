// Components
import { BackButton } from "@/components/BackButton";

// Icons
import { Rocket } from "lucide-react";

// Constants
import { inDevelopmentSection } from "@/config/errors";

export function InDevelopmentSection() {
  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 text-center border-[.0625rem] rounded-md p-16 border-dashed">
        <div className="border-[1px] rounded-full p-3 border-dashed">
          <Rocket size={"1.5rem"} />
        </div>
        <div>
          <p className="opacity-75">{inDevelopmentSection.description}</p>
        </div>
        <BackButton title="Go Back" />
      </div>
    </section>
  );
}
