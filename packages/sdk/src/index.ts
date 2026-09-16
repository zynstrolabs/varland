import type {
  FlagDisputeParams,
  ParcelRecord,
  RegisterParcelParams,
  TransferParams,
} from "@varland/shared";

export type ParcelId = number | bigint | string;
export interface TxResult {
  hash: string;
  success: boolean;
}

function notWired(fn: string): never {
  throw new Error(
    `[sdk] ${fn} not wired: deploy contracts to Soroban testnet, generate TS bindings, then implement this wrapper (see packages/sdk/README.md).`,
  );
}

// Clean wrappers over raw Soroban contract calls so external integrators
// (government agency, fintech) don't need Soroban internals.
export async function registerParcel(
  _params: RegisterParcelParams,
): Promise<ParcelId> {
  return notWired("registerParcel");
}

export async function getParcel(_parcelId: ParcelId): Promise<ParcelRecord> {
  return notWired("getParcel");
}

export async function submitAttestation(
  _parcelId: ParcelId,
  _signature: string,
): Promise<TxResult> {
  return notWired("submitAttestation");
}

export async function initiateTransfer(
  _parcelId: ParcelId,
  _buyer: string,
  _price: TransferParams["price"],
): Promise<TxResult> {
  return notWired("initiateTransfer");
}

export async function flagDispute(
  _params: FlagDisputeParams,
): Promise<TxResult> {
  return notWired("flagDispute");
}

export const sdk = {
  registerParcel,
  getParcel,
  submitAttestation,
  initiateTransfer,
  flagDispute,
};
export default sdk;
