import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LiquidityPairsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creationDate" source="creationDate" />
        <TextInput label="pairName" source="pairName" />
      </SimpleForm>
    </Edit>
  );
};
