// Content Collections — el "esquema" tipado del blog (validado en build time).
// Approach B: astro:assets con image() → optimización WebP/AVIF, srcset y CLS 0.
// Ver .kiro/steering/performance.md y tech.md.
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // El helper image() resuelve una ruta relativa a un ImageMetadata optimizable
  // y valida en build que el archivo exista.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      // Tags alineados con los casos del sitio (ver CustomerStories / content.md).
      tag: z.enum([
        'Healthcare',
        'IoT',
        'Government',
        'Data',
        'Gen AI',
        'Machine Learning',
      ]),
      cover: image(),
      coverAlt: z.string(),
      author: z.string().default('Equipo Morris & Opazo'),
      // Permite ocultar borradores del listado sin borrarlos.
      draft: z.boolean().default(false),
    }),
});

// Casos de éxito — misma estrategia de imágenes (image() → WebP/AVIF, CLS 0).
const casos = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      // Industria del caso (texto libre para el pill de la tarjeta).
      industry: z.string(),
      // Cliente protagonista del caso (opcional).
      client: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      // Permite ocultar borradores del listado sin borrarlos.
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, casos };
