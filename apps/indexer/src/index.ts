import "dotenv/config";

/**
 * Varland indexer — Soroban event listener → Postgres sync service.
 *
 * Chain is the source of truth; Postgres is a read-optimized mirror.
 * PostGIS `boundary` column powers the duplicate-overlap check.
 *
 * TODO (build step 7): subscribe to contract events
 * (parcel registered, attestation submitted, status changed,
 *  transfer completed, dispute flagged) and upsert into Postgres.
 */

const DATABASE_URL = process.env.DATABASE_URL;

async function main() {
  console.log("[indexer] starting…");
  if (!DATABASE_URL) {
    console.log(
      "[indexer] DATABASE_URL not set — running in stub mode. Set it and implement event subscription in src/index.ts.",
    );
    return;
  }
  console.log("[indexer] DATABASE_URL set — event subscription not yet implemented.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
