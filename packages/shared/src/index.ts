import { z } from "zod";

// ── Parcel status ──────────────────────────────────────────────
export const ParcelStatusSchema = z.enum([
  "Unverified",
  "Verified",
  "Disputed",
  "PendingTransfer",
]);
export type ParcelStatus = z.infer<typeof ParcelStatusSchema>;

// ── Attestor roles ─────────────────────────────────────────────
export const AttestorRoleSchema = z.enum([
  "Surveyor",
  "LocalGovernment",
  "CommunityElder",
]);
export type AttestorRole = z.infer<typeof AttestorRoleSchema>;

// ── Parcel record (mirrors LandRegistry ParcelRecord) ──────────
export const ParcelRecordSchema = z.object({
  parcelId: z.union([z.number(), z.bigint(), z.string()]),
  owner: z.string(),
  parcelHash: z.string(), // hex of BytesN<32>
  geoHash: z.string(), // hex of BytesN<32>
  docUri: z.string(),
  status: ParcelStatusSchema,
  attestationCount: z.number().int().nonnegative(),
});
export type ParcelRecord = z.infer<typeof ParcelRecordSchema>;

// ── Register parcel params ─────────────────────────────────────
export const RegisterParcelParamsSchema = z.object({
  owner: z.string(),
  parcelHash: z.string(),
  geoHash: z.string(),
  docUri: z.string().max(512),
  // Off-chain boundary as GeoJSON polygon — stored in PostGIS, never on-chain.
  boundaryGeoJson: z.unknown().optional(),
});
export type RegisterParcelParams = z.infer<typeof RegisterParcelParamsSchema>;

// ── Attestation ────────────────────────────────────────────────
export const AttestationSchema = z.object({
  parcelId: z.union([z.number(), z.bigint(), z.string()]),
  attestor: z.string(),
  role: AttestorRoleSchema,
  signature: z.string(), // hex of BytesN<64>
  submittedAt: z.string().optional(),
});
export type Attestation = z.infer<typeof AttestationSchema>;

// ── Transfer ───────────────────────────────────────────────────
export const TransferParamsSchema = z.object({
  parcelId: z.union([z.number(), z.bigint(), z.string()]),
  buyer: z.string(),
  price: z.union([z.number(), z.bigint(), z.string()]),
});
export type TransferParams = z.infer<typeof TransferParamsSchema>;

// ── Dispute ────────────────────────────────────────────────────
export const DisputeResolutionSchema = z.enum([
  "Upheld", // dispute valid → back to Unverified
  "Dismissed", // dispute invalid → back to Verified
]);
export type DisputeResolution = z.infer<typeof DisputeResolutionSchema>;

export const FlagDisputeParamsSchema = z.object({
  parcelId: z.union([z.number(), z.bigint(), z.string()]),
  flagger: z.string(),
  reasonUri: z.string().max(512),
});
export type FlagDisputeParams = z.infer<typeof FlagDisputeParamsSchema>;

// ── Contract addresses (testnet config) ────────────────────────
export const ContractAddressesSchema = z.object({
  networkPassphrase: z.string(),
  rpcUrl: z.string().url(),
  landRegistry: z.string(),
  attestationRegistry: z.string(),
  transferEscrow: z.string(),
  disputeModule: z.string(),
});
export type ContractAddresses = z.infer<typeof ContractAddressesSchema>;

// ── Shared constants ───────────────────────────────────────────
export const ATTESTATION_THRESHOLD_ROLES = 2 as const; // N-of-M distinct roles
export const SUPPORTED_ATTESTOR_ROLES: AttestorRole[] = [
  "Surveyor",
  "LocalGovernment",
  "CommunityElder",
];
