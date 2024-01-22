import React from "react";
import { Input, Label } from "reactstrap";
import { INPUT_TYPES } from "../../Scripts/FormData";

const FormCollection = ({ formCollectionData, rowIndex, values, onChange }) => {
  if (formCollectionData.length === 0) {
    return null;
  }

  return (
    <>
      {formCollectionData.map((useFormDataItem) => {
        const { label, type, rules, containerClassNames, name } =
          useFormDataItem;
        const uniqueName = rowIndex ? `${name}_${rowIndex}` : name;

        return (
          <div className={containerClassNames || ""} key={uniqueName}>
            <Label className="" for={uniqueName}>
              {label}
            </Label>

            {type === INPUT_TYPES.notAnInput && <div></div>}

            {type === INPUT_TYPES.date && (
              <Input
                type={INPUT_TYPES.date}
                value={values[uniqueName]}
                onChange={(e) => onChange(uniqueName, e.target.value)}
              />
            )}

            {type !== INPUT_TYPES.notAnInput && type !== INPUT_TYPES.date && (
              <Input
                type={INPUT_TYPES.input}
                value={values[uniqueName]}
                onChange={(e) => onChange(uniqueName, e.target.value)}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

FormCollection.defaultProps = {
  formCollectionData: [],
  rowIndex: null,
  values: {},
  onChange: () => {},
};

export default FormCollection;
