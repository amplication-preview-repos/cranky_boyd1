import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
