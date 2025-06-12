import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alefe Raissa PWA',
    short_name: 'ARPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#B0CDDF',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/153x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/409x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}