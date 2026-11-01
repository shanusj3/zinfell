import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Zinfell | Engineering, Design & Growth Roles",
  description:
    "Join our distributed engineering studio. Build production SaaS platforms, AI systems, and digital experiences with high velocity.",
};

export default function CareersPage() {
  return <CareersClient />;
}
