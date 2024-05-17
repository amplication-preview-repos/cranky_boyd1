import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LiquidityPairsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creationDate" source="creationDate" />
        <TextInput label="pairName" source="pairName" />
      </SimpleForm>
    </Create>
  );
};
