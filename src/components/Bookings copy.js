import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
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
  const navigate = useNavigate();

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
  ];

  useEffect(() => {
    setRecords(service.getData());
    console.log(records);
    return () => {
      // cleanup
    };
  }, []);

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
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    TableUtils(records, headCells, filterFn);
  return (
    <Paper elevation={3}>
      <Stack direction="row" spacing={3}>
        <Typography
          varient="h6"
          sx={{
            color: "white",
          }}
        >
          Online Friends
        </Typography>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search room no or id"
            inputProps={{ "aria-label": "Search room no or id" }}
            onChange={handleSearch}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button variant="outlined" 
          onClick={()=>{
  
            navigate('/booking-add')
          }}
        startIcon={<AddIcon />}>
          Add
        </Button>
      </Stack>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.guest}</TableCell>
              <TableCell>{item.room}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Paper>
  );
}

export default Bookings;
