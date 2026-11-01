import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Zinfell | Start a Project or Request Consultation",
  description:
    "Tell us about your project, timeline, and requirements. We respond within 1 business day with clear recommendations and pricing.",
};

export default function ContactPage() {
  return <ContactClient />;
}
