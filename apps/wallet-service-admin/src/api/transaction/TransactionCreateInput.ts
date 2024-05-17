export type TransactionCreateInput = {
  amount?: number | null;
  fromWallet?: string | null;
  fromWalletId?: string | null;
  toWallet?: string | null;
  toWalletId?: string | null;
  transactionAmount?: number | null;
  transactionCreatedAt?: Date | null;
  transactionType?: "Option1" | null;
  transactionTypeOptions?: "Option1" | null;
};
