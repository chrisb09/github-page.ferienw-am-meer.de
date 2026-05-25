import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ferienw-am-meer.de'
  
  const routes = [
    '',
    '/fewo-105',
    '/fewo-105/wohnzimmer',
    '/fewo-105/schlafzimmer',
    '/fewo-105/badezimmer',
    '/fewo-105/balkon',
    '/fewo-106',
    '/fewo-106/wohnzimmer',
    '/fewo-106/schlafzimmer',
    '/fewo-106/badezimmer',
    '/fewo-106/balkon',
    '/fotogalerie',
    '/anreise',
    '/freizeit',
    '/kontakt',
    '/impressum',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('fewo') ? 'monthly' : 'yearly' as any,
    priority: route === '' ? 1 : 0.8,
  }))
}
