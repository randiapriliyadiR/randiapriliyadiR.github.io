import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://randiapriliyadi.github.io';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/works`, lastModified: new Date() },
    { url: `${baseUrl}/galleries`, lastModified: new Date() },
    { url: `${baseUrl}/timelines`, lastModified: new Date() },
  ];
}
