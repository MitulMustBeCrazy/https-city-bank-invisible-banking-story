# Invisible Banking presentation

Two independent static versions of the Invisible Banking story. The rebuilt V2 has 21 slides, including an AI-prospects section divider.

| Path | Version |
|---|---|
| `/v1/` | Preserved original presentation |
| `/v2/` | Rebuilt in the visual system of `city-bank-next-chapter`: paper, ink, City red, rounded cards, chapter rail and floating controls |

The root page opens v2. Neither version needs a build or backend. For a local preview, serve the repository directory with a static web server and visit `/v1/` or `/v2/`.

V2 uses the supplied `CITY_BANK_EDITORIAL_WEB_STYLE.md` for tone and the [City Bank Next Chapter](https://github.com/MitulMustBeCrazy/city-bank-next-chapter) site as its structural design reference. It is not a substitute for City Bank's formal brand rules or approved logo. The presentation uses a text wordmark and red rule until official assets are supplied.

Each slide uses a structure matched to its argument: convergence for overlap, a relationship matrix for the corporate ecosystem, paused and filling paths for journeys, and trigger-to-response flows for AI prospects. Motion is short and finite rather than decorative. The contribution slide describes initiatives or proposals by the presenter without claiming every idea has launched. The customer and AI prospects are labelled illustrative, and their detail panels set out conditions requiring internal validation.

Motion can be paused with the floating control or `M`; the system's reduced motion preference is respected. Navigate with arrow keys, touch swipes on larger screens, the overview, chapter rail, or floating controls. `v2/standalone.html` is the self-contained version; regenerate it after edits with `node scripts/build-standalone.mjs`.

## Netlify when approved

Deploy the repository root as a static site with no build command and publish directory `.`. The root redirects to `/v2/`. `/v1/` remains available for comparison.
