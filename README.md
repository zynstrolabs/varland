# Varland — land verification and fraud-resistant land-transfer on Stellar/Soroban

Monorepo (Turborepo + pnpm workspaces):

```
varland/
├── contracts/
│   ├── land-registry/        # LandRegistry contract
│   ├── attestation-registry/ # AttestationRegistry contract
│   ├── transfer-escrow/      # TransferEscrow contract
│   └── dispute-module/       # DisputeModule contract
├── apps/
│   ├── web/                  # Next.js 14 frontend (current: Next 16, see note)
│   └── indexer/              # Event listener → Postgres sync service
├── packages/
│   ├── sdk/                  # TypeScript SDK wrapping contract calls
│   ├── shared/               # Shared types, zod schemas, constants
│   └── ui/                   # Shared UI components
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Prerequisites

- Node >= 18, pnpm@12.3.4 (`corepack prepare pnpm@12.3.4 --activate`; if
  `corepack enable` fails with EACCES, install pnpm via
  `npm i -g pnpm@12.3.4` or `curl -fsSL https://get.pnpm.io/install.sh | sh`)
- Rust toolchain + `wasm32-unknown-unknown` target + `stellar-cli` for contracts

## Commands

```sh
pnpm install            # install all workspaces (deletes stale root pnpm-lock.yaml first, see note)
pnpm dev                # turbo: run all dev tasks
pnpm dev:web            # turbo: only @varland/web
pnpm build              # turbo: build all
pnpm test:contracts     # cargo test land-registry
```

## Notes

- Root `pnpm-lock.yaml` is currently **stale** (from the single-app era, before
  `apps/*` / `packages/*` existed). Delete it and re-run `pnpm install` once
  pnpm is available — it was kept to avoid a destructive change in this pass.
- `apps/web` is on Next 16.3.3 (inherited). Spec targets Next 14 — either keep
  16 (recommended, it's working) or downgrade deliberately.
- Contracts are excluded from `pnpm-workspace.yaml` (Rust crates, not JS
  packages) — pnpm globs only `apps/*` and `packages/*`.
