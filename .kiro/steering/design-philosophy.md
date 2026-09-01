---
inclusion: always
---

# Design Philosophy — Morris & Opazo

Autoridad de intención de diseño para el trabajo página por página. Se apoya en
`design-system.md` (tokens: colores, tipos, espaciado) y NO lo reemplaza: aquí vive el
*por qué* y el *cómo* de las decisiones; allí viven los valores exactos. Ante conflicto de
tokens, manda `design-system.md`.

## Tesis central
> **No implementamos cloud. Transformamos negocios.**

Todo lo visual sirve a un solo trabajo: convencer a un tomador de decisiones técnico
(CIO / gerente de tecnología) de que Morris & Opazo es el partner AWS que **entiende su
industria**, y llevarlo a *"Solicite una asesoría sin costo"*. El diseño es un
**instrumento de confianza**, no decoración.

## A quién le diseñamos
Comprador técnico senior y pragmático. Desconfía del hype y de lo llamativo. Responde a:
prueba (casos reales, métricas concretas — *2,7 millones de personas*, *100% en
productivo*, *+21 años*, *AWS Partner of the Year*), claridad y evidencia de competencia.
El diseño debe leerse **calmado, preciso y silenciosamente seguro** — nunca ruidoso ni
"de venta".

## Los cinco principios

1. **Cloud de noche — la contención como sofisticación.**
   Fondo tinta casi negro (`--ink`), la marca indigo (`--brand`) con intención, y el
   gradiente `--grad-flow` (violeta→cyan) reservado para momentos firma. La oscuridad
   señala producto técnico y premium. Se gasta la audacia visual en UN solo lugar por
   página (el héroe); el resto, disciplinado y quieto. Regla anti-genérico: nada de fondos
   crema, acid-green, ni energía de plantilla.

2. **Evidencia por sobre adjetivos.**
   La credibilidad viene de números y clientes con nombre (Agua de Quito, CChC, Round
   Trips, Interbank, AWS Partner of the Year). El diseño destaca *prueba*: contadores de
   stats, testimonios reales con nombre y cargo, tarjetas de caso con resultados
   concretos. Donde el original se apoya en prosa de marketing, dejamos que métricas y
   logos carguen el argumento. Cada página debe mostrar al menos una pieza de evidencia.

3. **Estructura industry-first.**
   El diferenciador es "el partner que entiende tu industria". La navegación y la
   arquitectura tratan **Servicios × Industrias** como los dos ejes del valor. Cada página
   de servicio/industria sigue un ritmo consistente y predecible:
   **héroe → desafío → expertise → soluciones → prueba → CTA**. La consistencia misma
   comunica madurez operacional.

4. **El flujo de datos como motivo visual.**
   El gradiente no es ornamento: evoca *flujo de datos / transformación*. Se usa con
   moderación: la malla animada del héroe, una línea de acento de 2px que barre en hover,
   UNA palabra en gradiente por titular. Es la metáfora de lo que hace la empresa (llevar
   negocios de legado a transformados) — por eso pertenece a Morris & Opazo y no a
   cualquier plantilla oscura de SaaS.

5. **El performance es parte de la marca.**
   Que el sitio de una consultora cloud sea rapidísimo, zero-JS y con fuentes
   auto-hospedadas *es* una señal de credibilidad: demuestra la competencia que venden.
   Piso de calidad innegociable: LCP < 1.5s, CLS ~0, contraste AA, focus por teclado,
   `prefers-reduced-motion`. La velocidad no limita el diseño; lo expresa.

## Voz tipográfica
- **Space Grotesk** (display) — tesis y titulares. Técnico, contemporáneo, tracking
  negativo en tamaños grandes. Con restricción.
- **Plus Jakarta Sans** (body) — humano, legible, profesional. El caballo de batalla.
- **IBM Plex Mono** (utility) — eyebrows, stats, labels, números. UPPERCASE + tracking
  amplio. La textura de "ingeniería" que señala rigor técnico.

## Lo que cada página core debe ganarse
Sin importar la página, tres preguntas deben responderse de un vistazo:
1. *¿Qué problema mío resuelve esto?* (encuadre relevante a la industria, arriba)
2. *¿Por qué creerles?* (prueba: una métrica, un cliente o un caso)
3. *¿Qué hago ahora?* (un CTA claro → asesoría)

## Proceso de trabajo (página por página)
Tomamos las páginas core de a una. Para cada una:
1. Se presenta un **brief de diseño** breve (estructura, secciones, qué evidencia muestra,
   cuál es el único momento audaz), anclado en esta filosofía.
2. Se **espera aprobación del usuario**.
3. Solo entonces se implementa.
No construir ni modificar páginas sin aprobación explícita del brief.

## Lista de páginas core (22)
Home `/` · Nosotros `/nosotros` · Talento `/talento` · Startup `/startup` ·
Contacto `/contacto` · Servicios `/servicio` (+ application-modernization,
cloud-migrations, data-analytics, gen-ai, ia-machine-learning, internet-of-things) ·
Industrias `/industria` (+ energy-resources, financial-services, healthcare, retail,
transportation-and-leisure, goverment, otras-industrias) · Blog `/blog` · Casos `/casos`.
(Las páginas de detalle `blog/[...slug]` y `casos/[...slug]` se renderizan desde Markdown
vía Content Collections; heredan estilo de sus plantillas, no se diseñan una a una.)
