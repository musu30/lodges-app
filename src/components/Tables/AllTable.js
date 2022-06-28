import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import TableUtils from "../TableUtils";
import * as service from "../../services/employeeService";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteTableDataDlg from "../Diologues/DeleteTableDataDlg";
import {
  AllCells,
  ArrivalCells,
  DepartureCells,
  DraftCells,
  DeletedCells,
} from "../../utils/models/tablemodels";

//in react we cant directly give as fn as parameter ,we can give fn name as key to object and then pass that
// object as parameter

function AllTable(props) {
  const [records, setRecords] = useState([]);
  const [dltDlgOpen, setDltDlgOpen] = useState(false);
  const [rowData, setRowData] = useState([]);

  const [filterFn, setfilterFn] = useState({
    fn: (items) => {
      // setFilterRecords(items);
      return items;
    },
  });
  const [selected, setSelected] = useState([]);
  const [headCells, setHeadCells] = useState([]);
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const tableComponent = useRef(null);
  const [currentTbl, setCurrentTbl] = useState([]);

  const [print, setPrint] = useState([]);
  const [printheads, setPrintheads] = useState([]);
  const [printVal, setPrintVal] = useState([]);
  const [filerValue, setFilterValue] = useState();





  useEffect(() => {
    props.searchComponent.handleSearch = handleSearch;
    setRecords(service.getData());
    if (props.index === 0) {
      setHeadCells(AllCells);
    } else if (props.index === 1) {
      setHeadCells(ArrivalCells);
    } else if (props.index === 2) {
      setHeadCells(DepartureCells);
    } else if (props.index === 3) {
      setHeadCells(DeletedCells);
    } else if (props.index === 4) {
      setHeadCells(DraftCells);
    } else {
      setHeadCells(AllCells);
    }

    console.log("reached table component");
    return () => {
      // cleanup
    };
  }, [props.index]);

  const handleRowDelete = (event, row) => {
    event.stopPropagation();
    console.log("delete row data =>", row);

    // setRowData([...theArray, `Entry ${theArray.length}`]);

    setRowData([row]);
    setDltDlgOpen(true);
  };
  const handleSelectDelete = (row) => {
    console.log("delete row data =>", row);

    setRowData([...rowData, row]);
    setSelected([]);

    setDltDlgOpen(true);
  };

  const onSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = records.map((n) => n.id);
      console.log("all data =>", newSelecteds);
      setSelected(newSelecteds);

      let newRawData = recordsAfterSorting().filter((data) => {
        if (newSelecteds.some((item) => item === data.id)) {
          console.log("data =>", data);
          return data;
        }
      });
      props.setDeleteData(newRawData);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    // props?.setDeleteData(newSelected);

    let newRawData = records.filter((data) => {
      if (newSelected.some((item) => item === data.id)) {
        console.log("data =>", data);
        return data;
      }
    });

    props.setDeleteData(newRawData);




    // const generatePdfData = () => {
    //   recordsAfterSorting().map((item)=>{
    //     {headCells.map((data) => {

    //     })}

    //   })
    // };
   
  };

  const handleSearch = (e) => {
    setSelected([]);
    let target = e.target;
    console.log("came in");
    setfilterFn({
      fn: (items) => {
        if (target.value == "") {
          return items;
        }
        // return items;
        else {
          return items.filter((x) =>
            x.guest.toLowerCase().includes(target.value)
          );
        }
      },
    });
    // e.preventDefault()
  };

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    recordsAfterSorting,
  } = TableUtils(records, headCells, filterFn, selected);
  return (
    <Paper
      elevation={3}
      style={{ borderRadius: "20px", paddingTop: "20px", overflowX: "auto" }}
    >
      <TblContainer>
        <TblHead onSelectAllClick={onSelectAllClick} />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow
              key={item.id}
              onClick={(event) => handleClick(event, item.id)}
              role="checkbox"
              aria-checked={isSelected(item.id)}
              tabIndex={-1}
              selected={isSelected(item.id)}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isSelected(item.id)}
                  // inputProps={{
                  //   "aria-labelledby": labelId,
                  // }}
                />
              </TableCell>

              {headCells.map((data) => (
                <>
                  {data.id === "id" ? (
                    <TableCell style={{ padding: "8px" }}>{item.id}</TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "guest" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.guest}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "room" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.room}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "date" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.date}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "id" ? (
                    <TableCell style={{ padding: "8px" }}>{item.id}</TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "guest" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.guest}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "room" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.room}
                    </TableCell>
                  ) : (
                    ""
                  )}
                </>
              ))}
              <TableCell style={{ padding: "8px" }}>
                <EditIcon
                  onClick={(item) => {
                    navigate("/add-booking");
                  }}
                />
                <DeleteIcon onClick={(event) => handleRowDelete(event, item)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
      <DeleteTableDataDlg
        open={dltDlgOpen}
        data={rowData}
        setOpen={setDltDlgOpen}
      />
       {/* <TablePdfGeneration
        print={print}
        headers={printheads}
        values={printVal}
      /> */}
    </Paper>
  );
}

export default AllTable;
