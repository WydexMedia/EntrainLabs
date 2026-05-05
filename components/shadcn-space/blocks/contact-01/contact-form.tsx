"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  terms: boolean;
  services: string[];
}

const serviceOptions = [
  "Performance Marketing",
  "Web Development",
  "Branding & marketing",
  "SEO training",
];

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    terms: false,
    services: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((item) => item !== service),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <Card className="rounded-md border-border bg-card p-5 shadow-sm animate-in fade-in slide-in-from-right-10 duration-1000 delay-100 ease-in-out fill-mode-both sm:p-6 lg:p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">
            Get a free quote
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="h-11 bg-background"
                required
              />
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="h-11 bg-background"
                required
              />
            </div>

            <Input
              id="email"
              name="email"
              placeholder="youremail@website.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="h-11 bg-background"
              required
            />

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                Web design services
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {serviceOptions.map((service) => (
                  <Label
                    key={service}
                    htmlFor={service}
                    className="flex cursor-pointer items-center gap-3 rounded-md border border-border bg-background px-3 py-3 text-sm font-normal text-foreground transition-colors hover:bg-muted/50"
                  >
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) =>
                        handleServiceChange(service, checked === true)
                      }
                    />
                    {service}
                  </Label>
                ))}
              </div>
            </div>

            <Textarea
              id="message"
              name="message"
              placeholder="Let us know about your project"
              value={formData.message}
              onChange={handleChange}
              className="min-h-28 resize-none bg-background"
              required
            />

            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={handleCheckboxChange}
                required
                className="mt-0.5"
              />
              <Label
                htmlFor="terms"
                className="text-sm font-normal leading-relaxed text-muted-foreground"
              >
                I have read and acknowledge the Terms and Conditions
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-11 w-full rounded-md"
            >
              Submit Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
