#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol};

// ── DisputeModule ──────────────────────────────────────────────
// TODO (build step 4): implement.
//   flag_dispute(parcel_id, flagger, reason_uri) — status -> Disputed,
//     freezes any pending transfer.
//   resolve_dispute(parcel_id, resolution) — admin/arbitrator-gated;
//     status -> Verified or Unverified depending on outcome.

#[contract]
pub struct DisputeModule;

#[contractimpl]
impl DisputeModule {
    pub fn __stub(_env: Env) -> Symbol {
        Symbol::new(&_env, "stub")
    }
}
