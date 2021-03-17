import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import BubbleChartSharpIcon from "@material-ui/icons/BubbleChartSharp";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";

export default function DataGridDemo(props) {
  function handleClick(event, params) {
    //props.setView();
    console.log(props);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      alert("YEAH");
    } else {
      let id = params.getValue("id");
      axios({
        method: "get",
        url: "http://localhost:5000/getsubmission/" + id,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then((response) => {
          if (response.status == 200) {
          }
          console.log(response.status);
        })
        .catch((errors) => console.log(errors));
    }
  }

  function getID(params) {
    return `${params.getValue("id")}`;
  }
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "firstName", headerName: "File Name", flex: 1 },
    { field: "lastName", headerName: "Assesment", flex: 1 },
    {
      field: "submitted_at",
      headerName: "Submissio Date",
      flex: 1,
    },
    {
      field: "Marks",
      headerName: "Marks",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Year",
      flex: 1,
      valueGetter: getID,
      renderCell: (params) => (
        <strong>
          <Button
            onClick={(event) => handleClick(event, params)}
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            value={params.getValue("id")}
          >
            Grade
          </Button>
        </strong>
      ),
    },
    {
      field: "state",
      headerName: "Status",

      renderCell: (params) =>
        props.view ? (
          <CheckIcon color="success" />
        ) : (
          <CheckIcon color="success" />
        ),
      flex: 0,
    },
  ];

  const [count, setCount] = useState(false);

  if (props.allRecords) {
    console.log(props);
    const rows = [];

    props.allRecords.data.map(function (value) {
      rows.push({
        id: value[0],
        lastName: value[4],
        firstName: value[3],
        Marks: value[11],
        submitted_at: value[5],
        button: "GRADE",
      });
    });

    return (
      <div className="row justify-content-center ">
        <div className="col-md-10" style={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    );
  } else {
    return <p>Loading Data...</p>;
  }
}
