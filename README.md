# Morris & Opazo — clon estático (Astro)

Recreación de portafolio de [morrisopazo.com](https://morrisopazo.com/) con un diseño
elevado. Sitio 100% estático construido con **Astro**, optimizado para performance
(cero JS de framework en cliente, salida HTML estática, fuentes con `display=swap`).

> Proyecto de demostración. No es el sitio de producción de Morris & Opazo.

## Stack

- **Astro** (`output: 'static'`) — todo prerenderizado a HTML.
- CSS plano con custom properties (design tokens en `src/styles/global.css`).
- Animaciones con CSS + islas mínimas de JS vanilla (IntersectionObserver, count-up).
- Sin frameworks UI en cliente, sin librerías de animación.

## Diseño

Dirección "cloud de noche": fondo tinta casi negro, color de marca indigo `#605BE5`
como firma, y un gradiente violeta→cyan (`--grad-flow`) usado con moderación. Tipografía
Space Grotesk (display) · Plus Jakarta Sans (body) · IBM Plex Mono (datos/eyebrows).
Contenido en español (es-CL). El sistema de diseño completo vive en `.kiro/steering/`.

## Estructura

```
src/
├─ styles/global.css          # reset + tokens + utilidades + keyframes
├─ layouts/BaseLayout.astro    # <head> SEO, fuentes
├─ components/
│  ├─ Header.astro  Footer.astro  Button.astro  Reveal.astro
│  └─ sections/     # Hero, ClientLogos, Approach360, Services, Stats,
│                   # Testimonials, CustomerStories, ContactCTA
├─ data/site.ts     # contenido tipado (fuente de verdad)
└─ pages/index.astro
```

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build estático → dist/
npm run preview  # previsualizar el build
```

## Deploy en Vercel

El repo incluye `vercel.json` (framework `astro`, salida `dist/`, cabeceras de caché
inmutable para assets con hash). Para desplegar:

1. Sube el repo a GitHub.
2. En Vercel: **New Project → Import** el repositorio.
3. Vercel autodetecta Astro; el build es `astro build` y la salida `dist/`.
4. Deploy.

## Performance

- Salida estática, HTML minificado, CSS inlineado automáticamente cuando conviene.
- Cero archivos JS de framework (los pequeños scripts de animación se inlinean).
- `content-visibility: auto` en secciones below-the-fold.
- Animaciones solo sobre `transform`/`opacity`; `prefers-reduced-motion` respetado.
- Focus visible por teclado y contraste AA.
