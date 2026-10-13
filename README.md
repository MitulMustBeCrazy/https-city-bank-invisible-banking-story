# Invisible Banking presentation

Two independent static versions of the same 20-slide narrative.

| Path | Version |
|---|---|
| `/v1/` | Preserved original presentation |
| `/v2/` | Editorial style with slide-specific transformation motion |

The root page opens v2. Neither version needs a build or backend. For a local preview, serve the repository directory with a static web server and visit `/v1/` or `/v2/`.

V2 uses the supplied `CITY_BANK_EDITORIAL_WEB_STYLE.md` as its digital visual reference. It is not a substitute for City Bank's formal brand rules or approved logo. The presentation uses a text wordmark and red rule until official assets are supplied.

Each slide uses a structure matched to its argument: convergence for overlap, sequential paths for journeys, networks for ecosystems, handoff for the proposed role, and trigger-to-response flows for AI prospects. A red signal acts as the continuous transformation motif. The customer and AI prospects are labelled illustrative, and their detail panels set out conditions requiring internal validation.

Motion can be paused with the header control or `M`; the system's reduced motion preference is respected. Navigate with arrow keys, touch swipes on larger screens, the overview, or the footer controls. `v2/standalone.html` is the self-contained version.

## Netlify when approved

Deploy the repository root as a static site with no build command and publish directory `.`. The root redirects to `/v2/`. `/v1/` remains available for comparison.
