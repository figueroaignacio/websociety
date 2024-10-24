// Hooks
import { useTranslations } from "next-intl";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

export function FAQS() {
  const t = useTranslations();
  const faqs = t.raw("faqs");

  return (
    <section className="flex flex-col gap-12 mb-12">
      <h2 className="font-bold text-2xl lg:text-4xl">FAQ&apos;s</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        {faqs.map((item: any) => (
          <AccordionItem value={item.value} key={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
