import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SETTINGS_TITLE_FIELD } from "./SettingsTitle";

export const SettingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="buyAmount" source="buyAmount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="targetProfit" source="targetProfit" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Users"
          target="settingsId"
          label="UsersItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Settings"
              source="settings.id"
              reference="Settings"
            >
              <TextField source={SETTINGS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
