# AdminPanel — Official Design System

**Status:** Official project design system (mandatory for all UI)  
**Theme:** Enterprise SaaS — neutral slate surfaces + deep indigo accent  
**Stack:** React + Tailwind CSS v3 + Inter + Material Symbols Outlined

## Sources of truth (do not diverge)

| File | Purpose |
|------|---------|
| `tailwind.config.cjs` | Color tokens, spacing, typography, radii, shadows |
| `src/index.css` | `@layer components` — shell, cards, nav, buttons, badges, tables |
| `src/components/ui/` + `src/components/layout/` | Reusable React components |

**Canonical layout reference:** `stitch-export/analytics_dashboard_1/code.html`  
**Visual intent:** `stitch-export/systematic_clarity/DESIGN.md` (neutral grays, indigo primary)

### Governance

- Use **only** tokens and component classes defined above.
- Do **not** introduce alternate palettes, lavender MD3 surfaces, pastel gradients, or ad-hoc hex colors unless the user explicitly requests an exception.
- Do **not** copy styles from other Stitch exports (`pastel_harmony`, `technical_admin`, `luminous_admin`, etc.).
- New pages must reuse `AppShell`, existing UI components, and `@layer` utilities before inventing one-off styles.

---

## 1. Brand & intent

- **Audience:** Operators, analysts, administrators
- **Style:** Modern minimalism — data density, clear hierarchy, low visual noise
- **Tone:** Professional, reliable, data-centric — corporate SaaS
- **Iconography:** [Material Symbols Outlined](https://fonts.google.com/icons) — `opsz` 24, `wght` 400, `FILL` 0 (filled: `FILL` 1 via `.fill` class)

---

## 2. Color system

### 2.1 Brand

| Role | Token | Hex | Usage |
|------|--------|-----|--------|
| **Primary** | `primary` | `#4f46e5` | Active nav, CTAs, key metrics, progress fills, feature cards |
| On primary | `on-primary` | `#ffffff` | Text/icons on primary |
| Primary hover / emphasis | `primary-container` | `#4338ca` | Button hover, avatar chip |
| **Secondary** | `secondary` | `#2563eb` | Informational series, secondary KPIs |
| **Tertiary** | `tertiary` | `#b45309` | Pending / warning metrics only |

### 2.2 Surfaces & text

| Token | Hex | Role |
|--------|-----|------|
| `background` | `#f8fafc` | App canvas (main content area) |
| `surface` | `#ffffff` | Header, elevated chrome |
| `surface-container-lowest` | `#ffffff` | Cards (alias; prefer `bg-white` via component classes) |
| `surface-container-low` | `#f8fafc` | Table headers, engagement footers |
| `surface-container` | `#f1f5f9` | Progress tracks, hover fills, pills |
| `surface-container-high` | `#e2e8f0` | Stronger hover (legacy token; prefer `surface-container`) |
| `on-surface` | `#0f172a` | Primary text (near-black) |
| `on-surface-variant` | `#64748b` | Labels, secondary text |
| `outline-variant` | `#e2e8f0` | Card borders, dividers (cool gray) |
| `outline` | `#64748b` | Strong borders, dark-mode shell |

**Avoid:** `#fcf8ff`, `#f5f2fe`, `#efecf8`, `#e9e6f3` lavender MD3 values — superseded by slate neutrals above.

### 2.3 Semantic (status only)

| Meaning | Classes |
|---------|---------|
| Success / up | `text-emerald-700` `bg-emerald-50` — `.badge-trend-up`, `.badge-status-stable` |
| Danger / down | `text-rose-700` `bg-rose-50` — `.badge-trend-down` |
| Growing | `text-blue-700` `bg-blue-50` — `.badge-status-growing` |
| Health | `text-emerald-600` `bg-emerald-50` |

Do not use semantic colors for chrome, cards, or navigation.

### 2.4 Icon wells (muted tints)

| Accent | Classes |
|--------|---------|
| Primary | `.icon-well-primary` → `bg-indigo-50 text-primary` |
| Secondary | `.icon-well-secondary` → `bg-blue-50 text-secondary` |
| Tertiary | `.icon-well-tertiary` → `bg-amber-50 text-tertiary` |

### 2.5 Error

| Token | Hex |
|--------|-----|
| `error` | `#dc2626` |
| `error-container` | `#fee2e2` |
| `on-error-container` | `#991b1b` |

---

## 3. Typography

**Family:** Inter (`400`, `500`, `600`, `700`).

Prefer **component typography classes** (include correct text colors):

| Class | Use |
|-------|-----|
| `.type-display` | Hero metrics |
| `.type-headline-lg` | Section titles, KPI values |
| `.type-headline-md` | Page title, card titles |
| `.type-body-md` | Descriptions, table body |
| `.type-label-md` | Metric labels, table headers |

Ad hoc: `text-xs`, `text-sm`, `text-[10px]` for pills and meta.

---

## 4. Spacing

| Token | Value | Use |
|--------|-------|-----|
| `stack_sm` | 8px | Tight stacks |
| `stack_md` | 16px | Default stack |
| `stack_lg` / `gutter` | 24px | Section gap, grids |
| `sidebar_width` | 240px | Sidebar |
| `container_padding` | 32px | Page horizontal (`px-8`) |

**Layout rhythm:** `space-y-8` (sections), `gap-6` (grids), `p-6` / `p-8` (cards), table `px-6 py-3` / `py-4`.

---

## 5. Border radius

| Key | Value | Use |
|-----|-------|-----|
| `rounded` | 4px | Small badges |
| `rounded-lg` | 8px | Nav, icon wells |
| `rounded-xl` | 12px | Cards, CTAs |
| `rounded-full` | pill | Avatars, pills, progress |

---

## 6. Shadows

| Token / class | Use |
|---------------|-----|
| `shadow-card` | Resting cards, tables |
| `hover:shadow-card-hover` | Interactive cards (`.card-interactive`, `.card-lift`) |
| `shadow-header` | Top bar |
| Border-first | Prefer `border-outline-variant` over heavy shadow |

---

## 7. Component classes (implemented in `src/index.css`)

### Shell

| Class | Description |
|-------|-------------|
| `.shell-sidebar` | Fixed 240px, white, right border |
| `.shell-header` | Fixed top bar, white, `shadow-header` |
| `.shell-main` | Offset main, `bg-background` |
| `.shell-content` | `max-w-7xl mx-auto space-y-8` |

### Navigation & buttons

| Class | Description |
|-------|-------------|
| `.nav-item` | Inactive link, gray hover |
| `.nav-item-active` | Indigo active state |
| `.btn-ghost-pill` | Logout / secondary actions |
| `.btn-icon` | Icon-only (refresh) |
| `.btn-primary` | Solid indigo CTA |
| `.btn-inverse` | White button on feature card |

### Cards & tables

| Class | Description |
|-------|-------------|
| `.card-base` | White card, subtle border + shadow |
| `.card-interactive` | KPI / demographic cards with hover shadow |
| `.card-pad` / `.card-pad-lg` | `p-6` / `p-8` |
| `.card-feature` | Indigo marketing / forecast block |
| `.card-feature-copy` | Subcopy on feature card (`text-indigo-100`) |
| `.card-lift` | Engagement card hover elevation |
| `.engagement-footer` | Gray footer strip on engagement card |
| `.table-shell` | Table wrapper card |
| `.table-head` | `bg-surface-container-low` header row |
| `.table-row` | Row hover |

### Metrics & status

| Class | Description |
|-------|-------------|
| `.icon-well-primary` … `tertiary` | KPI icon containers |
| `.progress-track` / `.progress-track-lg` | 1px / 2px tracks |
| `.badge-trend-up` / `.badge-trend-down` | Trend chips |
| `.badge-status-stable` / `.badge-status-growing` | Table status pills |

---

## 8. Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Sidebar 240px] │ [Header h-16, left offset 240px]         │
│                 ├───────────────────────────────────────────┤
│                 │ Main: ml-[240px] pt-24 pb-12 px-8         │
│                 │   └ max-w-7xl mx-auto space-y-8           │
└─────────────────────────────────────────────────────────────┘
```

- Sidebar `z-50`, header `z-40`
- KPI grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Split section: `lg:grid-cols-12`, `lg:col-span-5` / `7`

---

## 9. Reusable React components

| Component | Path |
|-----------|------|
| `AppShell`, `Sidebar`, `TopBar`, `PageContainer`, `SectionTitle` | `src/components/layout/` |
| `StatCard`, `EngagementCard`, `DemographicCard`, `FeatureCard`, `DataTableCard` | `src/components/ui/` |
| `StatusBadge`, `ProgressBar`, `IconWell`, `MaterialIcon`, `AvatarChip`, `Divider` | `src/components/ui/` |

**New screens:** Compose from these; extend props before cloning markup.

---

## 10. Dark mode (optional)

- `darkMode: 'class'` on `<html>`
- Default: `class="light"`
- Component classes include `dark:` overrides for shell only
- Do not introduce a second color palette for light mode

---

## 11. Animation

| Pattern | Implementation |
|---------|----------------|
| Nav press | `active:scale-[0.98]` on `.nav-item-active` |
| Card hover | `transition-shadow` + `shadow-card-hover` |
| Icon button | `active:opacity-80` on `.btn-icon` |
| Text CTA | `hover:underline` |
| Engagement card | `.card-lift` (shadow only, no translate) |

---

## 12. Stitch exports — reference only

| Export family | Use in React app? |
|---------------|-------------------|
| `analytics_dashboard_1`, `*_4` (Systematic Clarity layout) | **Layout reference only** — colors from this doc |
| Pastel Harmony, Technical Admin, Luminous | **Do not use** |

---

## 13. Implementation checklist

- [x] `tailwind.config.cjs` — enterprise palette
- [x] `src/index.css` — `@layer components`
- [x] Inter + Material Symbols in `index.html`
- [x] `AppShell`, `StatCard`, `Sidebar`, analytics dashboard page
- [x] Semantic badges via `StatusBadge`
- [ ] Additional Stitch pages (reuse components + tokens)
- [ ] `ThemeToggle` when dark mode is required

---

*Official theme locked in `tailwind.config.cjs` + `src/index.css`. Last aligned with analytics dashboard implementation.*
