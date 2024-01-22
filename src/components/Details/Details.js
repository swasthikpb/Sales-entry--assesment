import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
} from "reactstrap";
import { getDetails } from "../../redux/details";
import { useDispatch, useSelector } from "react-redux";
import { X } from "react-feather";
import { BUTTON_NAMES } from "../../Scripts/constants";

const Details = ({ handleClick, handleInputChange }) => {
  const detail = useSelector((state) => state?.detailSlice?.details);
  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getDetails());
  }, []);

  const totalAmount = detail.reduce((acc, useItem) => {
    return acc + useItem?.rate * useItem?.qty;
  }, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = detail.slice(indexOfFirstItem, indexOfLastItem);
  const getEmptyRow = (index) => {
    return currentItems[index];
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Card className="my-5">
      <CardHeader>
        <CardTitle>Details</CardTitle>
        <CardBody>
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th>description</th>
                <th>Item Code</th>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Sr No</th>
                <th>Vr no</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((useItem, index) => {
                return (
                  <tr className="text-center" key={index}>
                    {!useItem?.vr_no ? (
                      <>
                        {Object.keys(getEmptyRow(index)).map(
                          (field, fieldIndex) => {
                           
                            return (
                              <td key={fieldIndex}>
                                <div className="px-1">
                                  {field === "amount" ? (
                                    <div></div>
                                  ) : (
                                    <Input
                                      name={field}
                                      size="sm"
                                      className="ms-1 mr-1"
                                      defaultValue={useItem[field]}
                                      onChange={(e) =>
                                        handleInputChange(
                                          e.target.value,
                                          field,
                                          index
                                        )
                                      }
                                    />
                                  )}
                                </div>
                              </td>
                            );
                          }
                        )}
                        <td>
                          <X
                            onClick={() =>
                              handleClick(BUTTON_NAMES.Remove, index)
                            }
                            size={25}
                            color="red"
                          />
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{useItem?.description}</td>
                        <td>{useItem?.item_code}</td>
                        <td>{useItem?.item_name}</td>
                        <td>{useItem?.qty}</td>
                        <td>{useItem?.rate}</td>
                        <td>{useItem?.sr_no}</td>
                        <td>{useItem?.vr_no}</td>
                        <td>{useItem?.rate * useItem?.qty}</td>
                        <td></td>
                      </>
                    )}
                  </tr>
                );
              })}

              <tr>
                <td colSpan="5" className="text-right">
                  <strong>Total Amount:</strong>
                </td>
                <td>{totalAmount}</td>
              </tr>
            </tbody>
          </Table>

          <Pagination>
            {Array.from({
              length: Math.ceil(detail.length / itemsPerPage),
            }).map((_, index) => (
              <PaginationItem key={index} active={index + 1 === currentPage}>
                <PaginationLink onClick={() => paginate(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </Pagination>
        </CardBody>
      </CardHeader>
    </Card>
  );
};

export default Details;
