import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDetailsAPI,
  insertHeaderAndDetailTableAPI,
} from "../Store/Detail/Detail";
import {
  FORM_TYPE,
  PROMISE_STATE,
  REDUX_TYPES,
  SLICE_NAME,
} from "../Scripts/constants";

const INTIAL_STATE = {
  details: [],
  formData: {
    header_table: {},
    detail_table: [],
  },
};

export const getDetails = createAsyncThunk(
  REDUX_TYPES.allDetails.type,
  async () => {
    const ret = { ...INTIAL_STATE };
    return getDetailsAPI()
      .then((resp) => {
        if (resp.length == 0) {
          return ret;
        }
        return resp;
      })
      .catch((error) => {
        console.log(error);
        return ret;
      });
  }
);

export const insertHeaderAndDetailTable = createAsyncThunk(
  REDUX_TYPES.insertDetailsAndHeader.type,
  async (payloadData, thunkAPI) => {
    return insertHeaderAndDetailTableAPI(payloadData)
      .then((resp) => {
        if (resp.length > 0) {
          thunkAPI.dispatch(getDetails());
        }
        return resp;
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const allDetails = createSlice({
  name: SLICE_NAME.detailSlice,
  initialState: { ...INTIAL_STATE },
  reducers: {
    handleAddRows: (state, action) => {
      state.details = [action.payload, ...state.details];
    },

    handleRemove: (state, action) => {
      state.details = state?.details?.filter(
        (_, index) => index !== action?.payload
      );
    },
    handleInsert: (state, action) => {
      const newData = action.payload;
      state.details = state.details.map((existingData, index) =>
        index < newData.length ? newData[index] : existingData
      );
    },
    handleFormData: (state, action) => {
      const { data, type } = action.payload;
      if (type === FORM_TYPE.header) {
        state.formData.header_table = data;
      } else if (type === FORM_TYPE.detail) {
        state.formData.detail_table = data;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
  },
});
export const { handleAddRows, handleRemove, handleInsert, handleFormData } =
  allDetails.actions;
export const { reducer } = allDetails;
