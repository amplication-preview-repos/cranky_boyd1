export type Transaction = {
  amount: number | null;
  createdAt: Date;
  fromWallet: string | null;
  fromWalletId: string | null;
  id: string;
  toWallet: string | null;
  toWalletId: string | null;
  transactionAmount: number | null;
  transactionCreatedAt: Date | null;
  transactionType?: "Option1" | null;
  transactionTypeOptions?: "Option1" | null;
  updatedAt: Date;
};
