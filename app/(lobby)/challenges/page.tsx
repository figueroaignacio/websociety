import { BackButton } from "@/components/back-button";
import { FramerDiv, FramerSection } from "@/components/framer/index";
import { HeroBg } from "@/components/layout/hero-bg";
import { inDevelopmentSection } from "@/config/errors";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants/animations";
import { Rocket } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges",
  description:
    "Explore and participate on cool challenges to improve your skills and show them in you GitHub.",
};

export default function ChallengesPage() {
  return (
    <FramerSection
      className="min-h-[90vh] flex justify-center items-center"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <HeroBg />
      <FramerDiv
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="flex flex-col justify-center items-center bg-card gap-3 text-center border-2 rounded-md p-16 border-dashed"
      >
        <div className="border-2 rounded-full p-3">
          <Rocket size="1.5rem" />
        </div>
        <div>
          <p className="opacity-75">{inDevelopmentSection.description}</p>
        </div>
        <BackButton title="Go Back" />
      </FramerDiv>
    </FramerSection>
  );
}
