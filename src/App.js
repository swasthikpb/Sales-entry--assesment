import React, { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import { BUTTON_NAMES, BUTTON_TYPES, FORM_TYPE } from "./Scripts/constants";
import SalesEntry from "./pages/SalesEntry/SalesEntry";
import Papa from "papaparse";

import { Card } from "reactstrap";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddRows,
  handleFormData,
  handleInsert,
  handleRemove,
  insertHeaderAndDetailTable,
} from "./redux/details";
import { FORM_VALUES } from "./Scripts/FormData";

const INTIALSTATE = {
  ...FORM_VALUES.header,
};

const ADD_NEW_PAYLOAD = {
  description: "",
  item_code: "",
  item_name: "",
  qty: "",
  rate: "",
  sr_no: "",
  vr_no: "",
  amount:''
};
const App = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state?.detailSlice?.details);
  const { header_table, detail_table } = useSelector(
    (state) => state?.detailSlice?.formData
  );
  const [detailData, setDetailData] = useState(detail);
  const [headerData, setHeaderData] = useState(INTIALSTATE);

  const handleClick = (name, index, data) => {
    if (name === BUTTON_NAMES.New) {
      dispatch(handleAddRows(ADD_NEW_PAYLOAD));
    }
    if (name === BUTTON_NAMES.Remove) {
      dispatch(handleRemove(index));
    }
    if (name === BUTTON_NAMES.Insert) {
      if (detailData.length === 0) {
        return;
      }
      const payload = {
        data: detailData,
        type: FORM_TYPE.detail,
      };
      dispatch(handleInsert(detailData));
      dispatch(handleFormData(payload));
      setDetailData([]);
    }
    if (name === BUTTON_NAMES.Save) {
      const payload = {
        header_table: header_table,
        detail_table: detail_table,
      };
      dispatch(insertHeaderAndDetailTable(payload));
    }
    if (name === BUTTON_NAMES.Print) {
      const dataArray = [...detail];
      const csv = Papa.unparse(dataArray);
      exportInCSV(csv);
    }
  };

  const exportInCSV = (csvData) => {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "printData.csv";
    document.body.appendChild(a);
    a.click();
  };

  const handleInputChange = (value, field, index) => {
    const updatedRows = [...detailData];
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value,
    };
    setDetailData(updatedRows);
  };

  const handleHeaderInputChange = (field, value) => {
    const updatedData = JSON.parse(JSON.stringify(headerData));
    updatedData[field] = value;
    setHeaderData(updatedData);
    const payload = {
      data: updatedData,
      type: FORM_TYPE.header,
    };
    dispatch(handleFormData(payload));
  };

  return (
    <div className="d-flex  App ">
      <SalesEntry
        handleClick={handleClick}
        handleInputChange={handleInputChange}
        handleHeaderInputChange={handleHeaderInputChange}
      />

      <Card
        color="light-info"
        className="d-flex flex-column align-items-center gap-1 m-5"
        style={{ minWidth: "100px", height: "200px" }}
      >
        {BUTTON_TYPES.map((useItem) => (
          <div key={useItem.name} className="p-2">
            <ButtonComponent
              name={useItem.name}
              color={useItem.color}
              handleClick={handleClick}
            />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default App;
