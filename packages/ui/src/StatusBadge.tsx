import type { ParcelStatus } from "@varland/shared";
import { cn } from "./cn";

const styles: Record<ParcelStatus, string> = {
  Verified: "bg-green-100 text-green-900",
  Unverified: "bg-amber-100 text-amber-900",
  PendingTransfer: "bg-amber-100 text-amber-900",
  Disputed: "bg-red-100 text-red-900",
};

export function StatusBadge({ status }: { status: ParcelStatus }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[10px] font-semibold",
        styles[status],
      )}
    >
      {status}
    </span>
  );
}
