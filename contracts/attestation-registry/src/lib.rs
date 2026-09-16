#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol};

// ── AttestationRegistry ────────────────────────────────────────
// TODO (build step 3): implement + wire to LandRegistry.
//   add_attestor(address, role) — admin-gated; roles: Surveyor,
//     LocalGovernment, CommunityElder
//   submit_attestation(parcel_id, attestor, signature)
//   check_threshold(parcel_id) -> bool — true once attestations from
//     >= 2 DIFFERENT roles are met; then calls
//     LandRegistry.update_status(parcel_id, Verified).
//   The distinct-role requirement is the core anti-collusion property.

#[contract]
pub struct AttestationRegistry;

#[contractimpl]
impl AttestationRegistry {
    pub fn __stub(_env: Env) -> Symbol {
        Symbol::new(&_env, "stub")
    }
}
