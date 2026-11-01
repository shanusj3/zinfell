import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zinfell.com";
  const now = new Date();

  // Only valid, active 200 OK standalone pages that exist on the website
  const routes = [
    "",
    "/solutions",
    "/products",
    "/about",
    "/process",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/solutions" || route === "/products" ? 0.9 : 0.8,
  }));
}
