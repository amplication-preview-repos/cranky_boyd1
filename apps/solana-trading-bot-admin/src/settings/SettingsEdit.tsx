import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UsersTitle } from "../users/UsersTitle";

export const SettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="buyAmount" source="buyAmount" />
        <NumberInput label="targetProfit" source="targetProfit" />
        <ReferenceArrayInput
          source="usersItems"
          reference="Users"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsersTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
