import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "fromWallet";

export const TransactionTitle = (record: TTransaction): string => {
  return record.fromWallet?.toString() || String(record.id);
};
