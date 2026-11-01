import type { Metadata } from "next";
import ZeviodeskClient from "./ZeviodeskClient";

export const metadata: Metadata = {
  title: "Zeviodesk | Repair Shop Management Software by Zinfell",
  description:
    "Discover Zeviodesk, a repair business management platform designed to organize service tickets, customers, inventory, billing, warranties, and customer communication.",
};

export default function ZeviodeskPage() {
  return <ZeviodeskClient />;
}
