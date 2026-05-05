import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "Do I need prior experience in digital marketing?",
    answer:
      "No prior experience is required. Our beginner-friendly approach is designed for all skill levels. We start with fundamentals and gradually build up to advanced concepts.",
  },
  {
    question: "What makes Entrain Labs different from other courses?",
    answer:
      "Unlike traditional courses that focus only on theory, we emphasize hands-on learning with real projects. You'll work on actual campaigns and build a portfolio that showcases your skills to potential employers.",
  },
  {
    question: "Will I get job placement assistance?",
    answer:
      "Yes! We provide comprehensive career guidance and support, including resume building, interview preparation, and connections with our industry partners.",
  },
  {
    question: "How long is the course?",
    answer:
      "Our comprehensive digital marketing program typically runs for 3-6 months, depending on the track you choose. We offer flexible schedules to accommodate working professionals and students.",
  },
  {
    question: "What tools and platforms will I learn?",
    answer:
      "You'll gain hands-on experience with industry-standard tools including Google Ads, Facebook Ads Manager, Google Analytics, SEMrush, Mailchimp, WordPress, and more.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            FAQs
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Got questions? We've got answers ready
          </h2>
        </div>
        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  {faq.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
