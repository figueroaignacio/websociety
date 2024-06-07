import { BackButton } from "@/components/back-button";
import { inDevelopmentSection } from "@/config/errors";
import { Rocket } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges",
  description:
    "Explore and participate on cool challenges to improve your skills and show them in you GitHub.",
};

export default function ChallengesPage() {
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
