import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="fromWallet" source="fromWallet" />
        <TextInput label="fromWalletId" source="fromWalletId" />
        <TextInput label="toWallet" source="toWallet" />
        <TextInput label="toWalletId" source="toWalletId" />
        <NumberInput label="transactionAmount" source="transactionAmount" />
        <DateTimeInput
          label="transactionCreatedAt"
          source="transactionCreatedAt"
        />
        <SelectInput
          source="transactionType"
          label="transactionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="transactionTypeOptions"
          label="transactionTypeOptions"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
