import React from "react";

import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";

function AppFormField({ name, ...other }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...other}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
