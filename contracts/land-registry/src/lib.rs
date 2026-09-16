#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, BytesN, Env, String, Symbol};

// ── LandRegistry ───────────────────────────────────────────────
// TODO (build step 2): implement in isolation.
//   register_parcel(owner, parcel_hash, geo_hash, doc_uri) -> u64
//   get_parcel(parcel_id) -> ParcelRecord
//   update_status(parcel_id, status) — only AttestationRegistry/DisputeModule

#[contracttype]
#[derive(Clone, Debug, PartialEq)]
pub enum ParcelStatus {
    Unverified,
    Verified,
    Disputed,
    PendingTransfer,
}

#[contracttype]
#[derive(Clone, Debug)]
pub struct ParcelRecord {
    pub owner: Address,
    pub parcel_hash: BytesN<32>,
    pub geo_hash: BytesN<32>,
    pub doc_uri: String,
    pub status: ParcelStatus,
    pub attestation_count: u32,
}

#[contract]
pub struct LandRegistry;

#[contractimpl]
impl LandRegistry {
    pub fn __stub(_env: Env) -> Symbol {
        Symbol::new(&_env, "stub")
    }
}
