#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol};

// ── TransferEscrow ─────────────────────────────────────────────
// TODO (build step 4): implement.
//   initiate_transfer(parcel_id, buyer, price) — locks buyer funds,
//     parcel flag -> PendingTransfer. Requires status == Verified.
//   confirm_transfer(parcel_id) — requires buyer+seller confirmation;
//     releases funds, updates owner in LandRegistry.
//   cancel_transfer(parcel_id) — refunds buyer if cancelled pre-confirm.

#[contract]
pub struct TransferEscrow;

#[contractimpl]
impl TransferEscrow {
    pub fn __stub(_env: Env) -> Symbol {
        Symbol::new(&_env, "stub")
    }
}
