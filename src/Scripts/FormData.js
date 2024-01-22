const FORM_FIELDS = {
  header: {
    vrNumber: "vr_no",
    vrDate: "vr_date",
    acountName: "ac_name",
    acountAmount: "ac_amt",
    status: "status",
  },
  details: {
    vrNumber: "vr_no",
    serialNumber: "sr_no",
    itemCode: "item_code",
    itemName: "item_name",
    description: "description",
    quantity: "qty",
    rate: "rate",
    amount:'amount'
  },
};
export const {
  header: HEADER_FORM_FIELD_NAMES,
  details: DETAILS_FORM_FIELD_NAMES,
} = FORM_FIELDS;

export const FORM_VALUES = {
  header: {
    [HEADER_FORM_FIELD_NAMES.vrNumber]: "",
    [HEADER_FORM_FIELD_NAMES.vrDate]: "",
    [HEADER_FORM_FIELD_NAMES.status]: "",
    [HEADER_FORM_FIELD_NAMES.acountName]: "",
    [HEADER_FORM_FIELD_NAMES.acountAmount]: "",
  },
  details: {
    [DETAILS_FORM_FIELD_NAMES.serialNumber]: "",
    [DETAILS_FORM_FIELD_NAMES.itemCode]: "",
    [DETAILS_FORM_FIELD_NAMES.itemName]: "",
    [DETAILS_FORM_FIELD_NAMES.quantity]: "",
    [DETAILS_FORM_FIELD_NAMES.description]: "",
    [DETAILS_FORM_FIELD_NAMES.rate]: "",
    [DETAILS_FORM_FIELD_NAMES.vrNumber]: "",
    [DETAILS_FORM_FIELD_NAMES.amount]: "",

  },
};

export const INPUT_TYPES = {
  date: "date",
  input: "input",
  notAnInput:'notAnInput'
};

const FORM_DATA = {
  getHeaderFormFields: () => {
    return [
      {
        label: "Vr Number",
        type: INPUT_TYPES.input,
        rules: { required: true },
        containerClassNames: "mb-1 col-md-2",
        name: HEADER_FORM_FIELD_NAMES.vrNumber,
      },
      {
        label: "VrDate",
        type: INPUT_TYPES.date,
        rules: { required: true },
        containerClassNames: "mb-1 col-md-2",
        name: HEADER_FORM_FIELD_NAMES.vrDate,
      },
      {
        label: "Status",
        type: INPUT_TYPES.input,
        rules: { required: true },
        containerClassNames: "mb-1 col-md-2",
        name: HEADER_FORM_FIELD_NAMES.status,
      },
      {
        label: "Acount Name",
        type: INPUT_TYPES.input,
        rules: { required: true },
        containerClassNames: "mb-1 col-md-2",
        name: HEADER_FORM_FIELD_NAMES.acountName,
      },
      {
        label: "Account Amount",
        type: INPUT_TYPES.input,
        rules: { required: true },
        containerClassNames: "mb-1 col-md-2",
        name: HEADER_FORM_FIELD_NAMES.acountAmount,
      },
    ];
  },
  getDetailFormFields:()=>{
    return [
      {
        type:INPUT_TYPES.input,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.vrNumber,
      },
      {
        type:INPUT_TYPES.input,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.serialNumber,
      },
      {
        type:INPUT_TYPES.input,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.itemCode,
      },
      {
        type:INPUT_TYPES.input,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.itemName,
      },
      {
        type:INPUT_TYPES.input,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.quantity,
      },
      {
        type:INPUT_TYPES.input,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.rate,
      },
      {
        type:INPUT_TYPES.notAnInput,
        rules:{required:true},
        name:DETAILS_FORM_FIELD_NAMES.amount,
      },


    ]
  }
};

export const { getHeaderFormFields: GET_HEADER_FORM_FIELDS,getDetailFormFields:GET_DETAILS_FORM_FIELDS } = FORM_DATA;
