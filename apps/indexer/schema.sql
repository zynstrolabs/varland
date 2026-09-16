-- Varland core schema. Requires: CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS parcels (
  parcel_id BIGINT PRIMARY KEY,
  owner_address TEXT NOT NULL,
  status TEXT NOT NULL,
  doc_uri TEXT,
  boundary GEOMETRY(Polygon, 4326),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS attestations (
  id SERIAL PRIMARY KEY,
  parcel_id BIGINT REFERENCES parcels(parcel_id),
  attestor_address TEXT NOT NULL,
  role TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS disputes (
  id SERIAL PRIMARY KEY,
  parcel_id BIGINT REFERENCES parcels(parcel_id),
  flagger_address TEXT NOT NULL,
  reason_uri TEXT,
  status TEXT NOT NULL,
  opened_at TIMESTAMPTZ DEFAULT now(),
  resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_parcels_boundary ON parcels USING GIST (boundary);

-- Duplicate-overlap check: run before allowing registration.
-- SELECT parcel_id FROM parcels WHERE ST_Intersects(boundary, ST_GeomFromGeoJSON($1));
