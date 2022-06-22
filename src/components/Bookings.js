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
import TableUtils from "./TableUtils";
import * as service from "../services/employeeService";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

//in react we cant directly give as fn as parameter ,we can give fn name as key to object and then pass that
// object as parameter

function Bookings() {
  const [records, setRecords] = useState([]);
  const [filterFn, setfilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const tableComponent=useRef(null)

  const headCells = [
    {
      id: "id",
      label: "ID",
      disableSorting: true,
    },
    {
      id: "guest",
      label: "Guest",
      disableSorting: false,
    },
    {
      id: "room",
      label: "Room",
      disableSorting: true,
    },
    {
      id: "date",
      label: "Date",
      disableSorting: true,
    },
    {
      id: "id1",
      label: "ID",
      disableSorting: true,
    },
    {
      id: "guest2",
      label: "Guest",
      disableSorting: false,
    },
    {
      id: "room1",
      label: "Room",
      disableSorting: true,
    },
    {
      id: "date1",
      label: "Date",
      disableSorting: true,
    },
  ];

  useEffect(() => {
    setRecords(service.getData());
    // console.log(records);
    return () => {
      // cleanup
    };
  }, []);

  const onSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = records.map((n) => n.id);
      setSelected(newSelecteds);
      console.log(selected)
      console.log("hiiii")
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
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  

  const handleSearch = (e) => {
    let target = e.target;

    setfilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        // return items;
        else
          return items.filter((x) =>
            x.guest.toLowerCase().includes(target.value)
          );
      },
    });
    // e.preventDefault()
  };

  const handleCheckClick = (e) => {
    let target = e.target;
    setfilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        // return items;
        else
          return items.filter((x) =>
            x.guest.toLowerCase().includes(target.value)
          );
      },
    });

    setfilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        // return items;
        else
          return items.filter((x) =>
            x.guest.toLowerCase().includes(target.value)
          );
      },
    });
    // e.preventDefault()
  };



  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    TableUtils(records, headCells, filterFn,selected);
  return (
    <Paper elevation={3} style={{ borderRadius: "20px", paddingTop: "20px" }}>
      <TblContainer>
        <TblHead onSelectAllClick={onSelectAllClick} />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
     
            <TableRow key={item.id}
            
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
              <TableCell style={{ padding: "8px" }}>{item.id}</TableCell>
              <TableCell style={{ padding: "8px" }}>{item.guest}</TableCell>
              <TableCell style={{ padding: "8px" }}>{item.room}</TableCell>
              <TableCell style={{ padding: "8px" }}>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Paper>
  );
}

export default Bookings;
