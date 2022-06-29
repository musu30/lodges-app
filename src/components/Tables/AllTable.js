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
import ToggleSwitch from "../ToggleSwich/ToggleSwitch";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

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
  const [checkBoxFlag, setCheckBoxFlag] = useState(false);
  

  useEffect(() => {
    props.searchComponent.handleSearch = handleSearch;
    setRecords(service.getData());
    if (props.index === 0) {
      setHeadCells(AllCells);
      setCheckBoxFlag(true);
    } else if (props.index === 1) {
      setHeadCells(ArrivalCells);
      setCheckBoxFlag(false);
    } else if (props.index === 2) {
      setHeadCells(DepartureCells);
      setCheckBoxFlag(false);
    } else if (props.index === 3) {
      setHeadCells(DeletedCells);
      setCheckBoxFlag(true);
    } else if (props.index === 4) {
      setHeadCells(DraftCells);
      setCheckBoxFlag(false);
    } else {
      setHeadCells(AllCells);
      setCheckBoxFlag(true);
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



  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  

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
        <TblHead onSelectAllClick={onSelectAllClick} flag={checkBoxFlag} />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item, index) => (
            <TableRow
              key={item.id}
              onClick={(event) => {
                if (headCells === AllCells || headCells === DeletedCells)
                  handleClick(event, item.id);
              }}
              role="checkbox"
              aria-checked={isSelected(item.id)}
              tabIndex={-1}
              selected={isSelected(item.id)}
            >
              {headCells === AllCells || headCells === DeletedCells ? (
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isSelected(item.id)}
                    // inputProps={{
                    //   "aria-labelledby": labelId,
                    // }}
                  />
                </TableCell>
              ) : (
                <TableCell style={{ padding: "8px" }}>{index + 1}</TableCell>
              )}

              {headCells.map((data) => (
                <>
                  {data.id === "name" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.name}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "mobile" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.mobile}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "occupation" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.occupation}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "purpose_of_visit" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.purpose_of_visit}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "room_number" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.room_number}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "arrival_date" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.arrival_date}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "departure_date" ? (
                    <TableCell style={{ padding: "8px" }}>
                      {item.departure_date}
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "action" ? (
                    <TableCell style={{ padding: "8px" }}>
                      <EditIcon
                        onClick={(item) => {
                          navigate("/add-booking");
                        }}
                      />
                      <DeleteIcon
                        onClick={(event) => handleRowDelete(event, item)}
                      />
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {data.id === "activate" ? (
                    <ToggleSwitch  />
                  ) : (
                    ""
                  )}
      
                </>
              ))}
              {/* <TableCell style={{ padding: "8px" }}>
                <EditIcon
                  onClick={(item) => {
                    navigate("/add-booking");
                  }}
                />
                <DeleteIcon onClick={(event) => handleRowDelete(event, item)} />
              </TableCell> */}
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
