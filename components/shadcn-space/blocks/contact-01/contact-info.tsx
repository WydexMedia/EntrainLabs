"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex min-w-0 flex-col gap-6 lg:gap-8">
      <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <Badge variant="outline" className="h-auto w-fit bg-background px-3 py-1 text-sm font-normal">
          Our locations
        </Badge>
        <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Let&apos;s discuss about your project and take it the next level.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          We proudly serve learners and businesses with practical digital marketing training, live projects, and expert guidance.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-md border border-border bg-muted shadow-sm animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="relative aspect-[16/10] min-h-72">
          <Image
            src="https://images.shadcnspace.com/assets/feature/feature-01-img.webp"
            alt="Students collaborating in a classroom"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <MapPin className="size-4" />
              </span>
              <div>
                <p className="max-w-sm text-sm font-medium leading-relaxed sm:text-base">
                  Mark Avenue, Dalls Road, New York
                </p>
                <a href="#contact" className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
                  View on map
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 ease-in-out fill-mode-both">
        <a href="mailto:contact@entrainlabs.com" className="group rounded-md border border-border bg-background p-4 transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-muted text-foreground">
              <Mail className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="truncate text-sm font-medium text-foreground sm:text-base">
                contact@entrainlabs.com
              </p>
            </div>
          </div>
        </a>
        <a href="tel:+323-25-8964" className="group rounded-md border border-border bg-background p-4 transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-muted text-foreground">
              <Phone className="size-4" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground sm:text-base">
                +323-25-8964
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
