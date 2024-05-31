// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Contanst
import { about } from "@/constants/about";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-12 mt-24">
      <h1 className="font-bold text-2xl lg:text-4xl">
        About this project.{" "}
        <span className="gradient-text">Front Society.</span>
      </h1>
      <p>
        Welcome to a dedicated platform for developers of all levels seeking to
        enhance their skills, stay updated with the latest trends, and challenge
        themselves through engaging content. My mission is to empower developers
        by providing high-quality articles, structured learning paths, and
        practical challenges that cater to a variety of interests and expertise
        levels.
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        {about.map((item) => (
          <AccordionItem value={item.value} key={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
