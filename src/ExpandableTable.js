import React, { useState } from "react";
import { Table } from "react-bootstrap";

const ExpandableTable = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      // setExpandedRows([id]); // at a time one row open
      setExpandedRows([...expandedRows, id]); // keep every row opend
    }
  };

  const Tbody = ({ item }) => {
    return (
      <tbody className="table-info  ">
        <tr className="table-primary  ">
          <th></th>
          <th>id</th>
          <th>name</th>
          <th>details</th>
        </tr>
        <tr className="  ">
          <td></td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.details}</td>
        </tr>
      </tbody>
    );
  };

  return (
    <>
      <div className="container">
        <Table className="table-bordered w-50 px-5">
          <thead>
            <tr>
              <th>icon</th>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>

          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tbody className="table-success">
                <tr onClick={() => handleRowClick(item.id)}>
                  <td>
                    {expandedRows.includes(item.id) ? (
                      <img width={"20px"} src="./up.svg" alt="svg" />
                    ) : (
                      <img width={"20px"} src="./upDown.svg" alt="svg" />
                    )}
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.details}</td>
                </tr>
              </tbody>
              {expandedRows.includes(item.id) && <Tbody item={item} />}
            </React.Fragment>
          ))}
        </Table>
      </div>
    </>
  );
};

export default ExpandableTable;
