---
inclusion: always
---

# Design System — Morris & Opazo (clon mejorado)

Autoridad de diseño. Toda decisión de color/tipo/espaciado se deriva de aquí. Sub-agentes:
NO inventen colores nuevos ni fuentes nuevas. Usen SOLO los tokens de abajo.

## Dirección de diseño (la tesis visual)
"Cloud de noche": fondo tinta casi negro, la marca indigo `#605BE5` como firma, y un
gradiente violeta→cyan que evoca flujo de datos / IA. Elegante, técnico, con calma.
Evitar explícitamente los defaults genéricos de IA: NO fondo crema, NO serif de alto
contraste, NO acid-green, NO layout tipo periódico.

## Color tokens (CSS custom properties, definir en global.css)
```
--brand:        #605BE5;  /* firma Morris & Opazo — usar con intención */
--brand-400:    #8B7CFF;  /* violeta claro para gradientes/hover */
--brand-600:    #4B45C9;  /* violeta profundo */
--accent-cyan:  #38E8D8;  /* fin del gradiente de datos (usar con MUCHA moderación) */

--ink:          #0B0B12;  /* fondo principal (near-black azulado) */
--ink-2:        #12121C;  /* superficies elevadas / cards */
--ink-3:        #1B1B29;  /* borders sutiles sobre ink */

--paper:        #FFFFFF;  /* texto sobre ink */
--muted:        #A6A6B8;  /* texto secundario sobre ink */
--muted-2:      #6E6E82;  /* texto terciario / captions */
--line:         rgba(255,255,255,0.08); /* hairlines */
```
Gradiente firma:
```
--grad-flow: linear-gradient(120deg, #605BE5 0%, #8B7CFF 45%, #38E8D8 100%);
```
Sección clara opcional (si se necesita contraste): fondo `--paper`, texto `--ink`.
Por defecto el sitio es **oscuro**.

## Tipografía (Google Fonts ya usadas por la marca — mantener identidad)
- **Display**: `Space Grotesk` (700/500) — headlines, tesis. Con restricción.
- **Body**: `Plus Jakarta Sans` (400/500/600) — párrafos, UI.
- **Utility/Data**: `IBM Plex Mono` (500) — eyebrows, labels, stats, números. UPPERCASE + letter-spacing.

Escala de tipo (clamp, fluida):
```
--fs-eyebrow: 0.8125rem;                          /* mono, tracking .18em, uppercase */
--fs-body:    clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
--fs-h3:      clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem);
--fs-h2:      clamp(1.9rem, 1.4rem + 2.2vw, 3.25rem);
--fs-display: clamp(2.6rem, 1.6rem + 5vw, 6rem);  /* hero */
```
Reglas: display line-height 0.98–1.05, tracking negativo (-0.02em) en titulares grandes.
Body line-height 1.6, max-width de párrafo ~62ch.

## Espaciado / layout
- Grid base 8px. Escala: 4,8,12,16,24,32,48,64,96,128.
- Contenedor: `--container: 1200px`, padding lateral `clamp(1.25rem, 5vw, 4rem)`.
- Ritmo vertical de secciones: `clamp(5rem, 10vw, 9rem)` padding-block.
- Radios: cards `16px`, botones `999px` (pill) o `10px`. Coherencia: elegir y mantener.

## Signature element
Hero "cloud transformation": la palabra **"Transformamos"** se revela con un barrido de
`--grad-flow` en el load; detrás, una malla/corriente de gradiente animada muy sutil
(CSS + canvas ligero opcional). Es EL elemento memorable — todo lo demás, callado.

## Componentes clave (estilo)
- **Botón primario**: fill `--brand`, texto blanco, pill, hover → lift + glow suave `--brand`.
- **Botón secundario/ghost**: borde `--line`, texto `--paper`, hover borde `--brand-400`.
- **Card**: fondo `--ink-2`, borde `--line`, hover → borde `--brand-400` + translateY(-4px).
- **Eyebrow**: mono, uppercase, tracking .18em, color `--brand-400` o `--muted-2`.

## Reglas anti-genérico (del skill frontend-design)
- Gastar la audacia en UN solo lugar (el hero). Todo lo demás disciplinado y quieto.
- Los marcadores numerados (01/02/03) SOLO si el contenido es realmente una secuencia.
- Menos es más: no llenar de animaciones. Una secuencia orquestada > efectos dispersos.

## Quality floor (obligatorio)
- Responsive hasta mobile (360px).
- Focus visible en teclado (`:focus-visible` con outline `--brand-400`).
- `@media (prefers-reduced-motion: reduce)` respetado en TODA animación.
- Contraste AA en texto.
