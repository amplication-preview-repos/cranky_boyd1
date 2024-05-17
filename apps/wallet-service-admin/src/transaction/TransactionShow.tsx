import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fromWallet" source="fromWallet" />
        <TextField label="fromWalletId" source="fromWalletId" />
        <TextField label="ID" source="id" />
        <TextField label="toWallet" source="toWallet" />
        <TextField label="toWalletId" source="toWalletId" />
        <TextField label="transactionAmount" source="transactionAmount" />
        <TextField label="transactionCreatedAt" source="transactionCreatedAt" />
        <TextField label="transactionType" source="transactionType" />
        <TextField
          label="transactionTypeOptions"
          source="transactionTypeOptions"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
