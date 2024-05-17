import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "id";

export const WalletTitle = (record: TWallet): string => {
  return record.id?.toString() || String(record.id);
};
