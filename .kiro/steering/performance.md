---
inclusion: always
---

# Performance — prioridad #1

El sitio debe ser rapidísimo. Objetivo: Lighthouse 95+ en Performance, LCP < 1.5s,
CLS ~0, JS enviado casi nulo.

## Principios
- **Static-first**: Astro `output: 'static'`. Todo prerenderizado a HTML.
- **Cero JS por defecto**: solo islas mínimas de JS vanilla para animaciones. Nada de frameworks UI en cliente.
- **Fuentes**: preconnect a Google Fonts + `display=swap`, subset a los pesos usados
  (Space Grotesk 500/700, Plus Jakarta Sans 400/500/600, IBM Plex Mono 500). Idealmente
  auto-hospedar en `public/fonts/` con `font-display: swap` y `<link rel=preload>` de la
  fuente del hero. `size-adjust`/fallback para evitar CLS.
- **Imágenes**: `astro:assets` `<Image />` → WebP/AVIF, `loading="lazy"` (excepto hero),
  `width/height` explícitos para reservar espacio (CLS 0). Placeholders SVG = peso mínimo.
- **CSS**: crítico inline lo mínimo; tokens en global.css. Evitar CSS sin usar. `<style>` scoped por componente (Astro lo optimiza y hace tree-shake por página).
- **Animaciones performantes**: animar solo `transform` y `opacity` (compositor). Nunca
  animar layout (width/height/top/left). `will-change` con moderación.
- **IntersectionObserver** para reveals (no scroll listeners). Un solo observer compartido.
- **No third-party bloat**: sin analytics pesados, sin librerías de carrusel. Marquee y
  count-up en vanilla.

## Tricks de senior
- `content-visibility: auto` en secciones below-the-fold para saltar render/paint.
- `fetchpriority="high"` en el asset LCP del hero; `loading=lazy` + `decoding=async` en el resto.
- Preload solo del recurso crítico (fuente display del hero).
- Respetar `prefers-reduced-motion`: desactivar animaciones no esenciales.
- Cabeceras de caché las gestiona Vercel para assets con hash (Astro hashea).
- Evitar CLS: reservar dimensiones de imágenes, fuentes con fallback métrico.
- Minificar HTML/CSS/JS (Astro por defecto en build).

## Checklist de verificación
- [ ] `npm run build` sin errores/warnings.
- [ ] `dist/` contiene HTML estático (no SSR).
- [ ] Ninguna sección carga JS innecesario (revisar que las islas sean mínimas).
- [ ] Imágenes con width/height, hero con fetchpriority alto.
- [ ] reduced-motion probado.
