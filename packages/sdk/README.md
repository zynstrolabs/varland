# @varland/sdk

TypeScript wrapper exposing clean functions over raw Soroban contract calls,
so external integrators (a government agency, a fintech) don't need to know
Soroban internals. Spec API:

```ts
registerParcel(params): Promise<ParcelId>
getParcel(parcelId): Promise<ParcelRecord>
submitAttestation(parcelId, signature): Promise<TxResult>
initiateTransfer(parcelId, buyer, price): Promise<TxResult>
flagDispute(parcelId, reason): Promise<TxResult>
```

## Wiring (build step 5–6)

1. Deploy contracts to Soroban testnet (`stellar-cli`):
   `stellar contract deploy --wasm target/wasm32-unknown-unknown/release/<contract>.wasm --source <secret> --rpc-url https://soroban-testnet.stellar.org --network-passphrase "Test SDF Network ; September 2015"`
2. Generate TS bindings per contract (`stellar contract bindings typescript ... --output-dir src/bindings/<contract>`).
3. Implement the stub functions in `src/index.ts` on top of the generated bindings.
4. Put contract IDs + RPC URL in `apps/indexer/.env` (see `.env.example`) and `@varland/shared` `ContractAddresses`.
