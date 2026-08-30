---
inclusion: always
---

# Tech & Structure

## Stack
- **Astro** (static output, `output: 'static'`). Cero JS por defecto.
- TypeScript en config y componentes.
- CSS plano con custom properties (tokens en `src/styles/global.css`). Sin Tailwind ni CSS-in-JS.
- Animaciones: CSS + pequeñas islas de JS vanilla (IntersectionObserver, count-up). Sin GSAP/framer.
- Deploy: **Vercel** (static). GitHub como repo.

## Comandos
- Dev: `npm run dev`
- Build: `npm run build`  → salida en `dist/` (HTML estático)
- Preview: `npm run preview`
- Node 18+.

## Estructura de carpetas
```
/
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ public/
│  ├─ favicon.svg
│  └─ fonts/ (si se auto-hospedan; si no, Google Fonts con preconnect)
├─ src/
│  ├─ styles/global.css        # reset + tokens + utilidades + keyframes
│  ├─ layouts/BaseLayout.astro # <head> SEO, fuentes, slots
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ Button.astro
│  │  ├─ SectionHeader.astro   # eyebrow + título reutilizable
│  │  ├─ Reveal.astro          # wrapper scroll-reveal (IntersectionObserver)
│  │  └─ sections/
│  │     ├─ Hero.astro
│  │     ├─ ClientLogos.astro
│  │     ├─ Approach360.astro
│  │     ├─ Services.astro
│  │     ├─ Stats.astro
│  │     ├─ Testimonials.astro
│  │     ├─ CustomerStories.astro
│  │     └─ ContactCTA.astro
│  ├─ data/site.ts             # contenido tipado (nav, servicios, stats, testimonios, casos)
│  └─ pages/index.astro        # ensambla las secciones
```

## Convenciones
- Contenido en `src/data/site.ts` (tipado), NO hardcodeado en el markup salvo microcopy.
- Cada sección es un `.astro` autocontenido con `<style>` scoped. Nada de estilos globales
  desde una sección (evita colisiones de especificidad — ver design-system.md).
- Imágenes: `astro:assets` (`<Image />`) para las locales; SVG inline para iconos.
- Accesibilidad: landmarks (`header/main/footer`), un solo `<h1>` (hero), alt en imágenes,
  `:focus-visible`, `prefers-reduced-motion`.
- SEO: title, meta description, OpenGraph, lang="es", canonical.

## Reglas para sub-agentes
- Respetar EXACTAMENTE los tokens de design-system.md.
- No añadir dependencias nuevas sin necesidad. Vanilla > librería.
- Cada componente debe compilar solo; usar los tipos/data de `src/data/site.ts`.
- Tras editar, el objetivo es que `npm run build` pase sin errores.
