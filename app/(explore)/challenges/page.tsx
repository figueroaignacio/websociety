// Components
import { BackButton } from "@/components/back-button";

export default function ChallengesPage() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-2xl">Main Developer</h3>
          <p>This part of the code is not finished, thanks for your patient.</p>
        </div>
        <BackButton title="Go Back" />
      </div>
    </section>
  );
}
