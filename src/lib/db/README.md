# MongoDB migration notes

## Current store touchpoints (Step 1 audit)

- Data source definition: `src/data/stores.ts` (base store seed + runtime JSON merge).
- Runtime static data file: `src/data/stores.runtime.json`.
- Read usage:
  - `src/app/demo/page.tsx`
  - `src/app/demo/[store]/page.tsx`
  - `src/app/admin/dashboard/page.tsx`
- Write usage:
  - `src/app/api/admin/stores/route.ts` via `saveRuntimeStore`.
- Store type dependencies in UI components:
  - `src/components/Hero.tsx`
  - `src/components/Categories.tsx`
  - `src/components/ProductGallery.tsx`
  - `src/components/ShowroomMap.tsx`
  - `src/components/WhatsappCTA.tsx`
  - `src/components/ConversionBar.tsx`

## Migration strategy

1. Introduce MongoDB connection + DB access layer.
2. Keep backward compatibility using hybrid reads/writes:
   - If MongoDB has stores, serve from MongoDB.
   - Otherwise fallback to existing static/runtime data source.
3. Migrate API and pages to DB access layer without changing component contracts.
4. Provide one-time migration script to seed MongoDB from existing data.
5. Later phase: fully remove fallback static store after production verification.
