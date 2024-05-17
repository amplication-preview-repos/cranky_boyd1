import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TradesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="buyAmount" source="buyAmount" />
        <TextInput label="pairName" source="pairName" />
        <NumberInput label="profit" source="profit" />
        <NumberInput label="sellAmount" source="sellAmount" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
