import {
  Checkbox,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  table: {
    marginTop: 2,
    "& thead th": {
      fontWeight: "800",
      color: "#00BEB8",
      backgroundColor: "white",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

function TableUtils(records, headCells, filterFn, other) {
  const classes = UseStyles();
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();
  const [filterRecords, setFilterRecords] = useState([]);

  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };
    return (
      <TableHead>
        <TableRow>
          {props.flag ? (
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                // indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={
                  records.length > 0 &&
                  (other && other.length) === records.length
                }
                onChange={props.onSelectAllClick}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </TableCell>
          ) : (
            <TableCell padding="checkbox">Sl No</TableCell>
          )}
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    console.log("reached 1");
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    console.log("reached 2");
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const recordsAfterPagingAndSorting = () => {
    const data = stableSort(
      // records,
      filterFn.fn(records),
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    // setFilterRecords(data);
    return data;
    // console.log(
    //   "data=>",
    //   records.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    // );
    // return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterSorting = () => {
    const data = filterFn.fn(records);

    // setFilterRecords(data);
    return data;
    // console.log(
    //   "data=>",
    //   records.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    // );
    // return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  const TblCheck = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    recordsAfterSorting,
  };
}

export default TableUtils;

// const TblHead = (props) => (
//   <TableHead>
//     <TableRow>
//       {headCells.map((item) => (
//         <TableCell key={item.id}>{item.label}</TableCell>
//       ))}
//     </TableRow>
//   </TableHead>
