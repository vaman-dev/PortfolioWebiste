import type { Metadata } from "next";

const LOCAL_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

export function getSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim();

  if (configuredUrl) {
    return normalizeSiteUrl(configuredUrl);
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return normalizeSiteUrl(
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    );
  }

  return LOCAL_SITE_URL;
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

export function isProductionIndexable() {
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  const configuredUrl = process.env.SITE_URL?.trim();

  return Boolean(
    process.env.NODE_ENV === "production" &&
      configuredUrl &&
      !/^https?:\/\/localhost(?::\d+)?$/i.test(configuredUrl)
  );
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const indexable = isProductionIndexable();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Apoorva Sharma",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — Apoorva Sharma`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
  };
}
