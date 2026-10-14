import type { MetadataRoute } from "next";

import { absoluteUrl, isProductionIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const indexable = isProductionIndexable();

  return {
    rules: {
      userAgent: "*",
      allow: indexable ? "/" : undefined,
      disallow: indexable ? undefined : "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
