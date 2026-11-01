import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Technology Insights, AI & Software Guides | Zinfell",
  description:
    "Explore practical articles on software development, AI, business automation, SaaS products, cloud infrastructure, SEO, and digital growth from Zinfell.",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
