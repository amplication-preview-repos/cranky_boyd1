import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TradesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="buyAmount" source="buyAmount" />
        <TextInput label="pairName" source="pairName" />
        <NumberInput label="profit" source="profit" />
        <NumberInput label="sellAmount" source="sellAmount" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
