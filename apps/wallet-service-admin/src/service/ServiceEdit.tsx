import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="serviceDescription"
          multiline
          source="serviceDescription"
        />
        <TextInput label="serviceName" source="serviceName" />
        <NumberInput label="servicePrice" source="servicePrice" />
      </SimpleForm>
    </Edit>
  );
};
