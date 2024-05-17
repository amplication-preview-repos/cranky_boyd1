import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="serviceDescription"
          multiline
          source="serviceDescription"
        />
        <TextInput label="serviceName" source="serviceName" />
        <NumberInput label="servicePrice" source="servicePrice" />
      </SimpleForm>
    </Create>
  );
};
