"use client";

import { Separator } from "@/components/ui/separator";
import { Marquee } from "@/components/shadcn-space/animations/marquee";

type BrandList = {
  image: string;
  name: string;
  lightimg: string;
};

const brandList: BrandList[] = [
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
    name: "Brand 1",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
    name: "Brand 2",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
    name: "Brand 3",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
    name: "Brand 4",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
    name: "Brand 5",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8 min-w-0 overflow-hidden">
      <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0"></div>
          <p className="text-base font-normal text-muted-foreground">
            We can help
          </p>
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground leading-snug">
          Let&apos;s discuss about your project and take it the next level.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Phone</p>
          <a
            href="tel:+323-25-8964"
            className="text-base font-medium text-primary"
          >
            +323-25-8964
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Email</p>
          <a
            href="mailto:contact@entrainlabs.com"
            className="text-base font-medium text-primary break-all"
          >
            contact@entrainlabs.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-sm font-normal text-muted-foreground">Location</p>
        <p className="text-base font-medium text-primary">
          Mark Avenue, Dalls Road, New York
        </p>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both min-w-0 overflow-hidden">
        <p className="text-base font-normal text-muted-foreground">
          Trusted by
        </p>
        <Marquee pauseOnHover className="[--duration:20s] p-0">
          {brandList.map((brand, index) => (
            <div key={index} className="flex items-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 sm:w-32 h-7 sm:h-8 mr-6 sm:mr-10 lg:mr-16 dark:hidden"
              />
              <img
                src={brand.lightimg}
                alt={brand.name}
                className="hidden dark:block w-24 sm:w-32 h-7 sm:h-8 mr-6 sm:mr-10 lg:mr-16"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ContactInfo;
