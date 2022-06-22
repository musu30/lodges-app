import React from "react";
import {
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  InputBase,
  Button,
  alpha,
  IconButton,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "./TableComponent";

function Feed() {
  const StyledSearchBar = styled("div")({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: "10px",
    width: "100%",
  });
  const Search = styled("div")({
    position: "relative",
  });

  const SearchIconWrapper = styled("div")({
    padding: "2px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
  });

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },

        background: "rgba(0,0,0,0.42)",
      }}
      style={{ marginTop: "62px", marginRight: "44px", marginBottom: "44px" }}
      flex={4}
    >
      <Stack direction="row" spacing={3}>
        <Typography
          varient="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
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
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          
        </Paper>

        {/* <Search>
          <StyledSearchBar>
            <InputBase placeholder="Search room no or id"></InputBase>
          </StyledSearchBar>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search> */}
        <Button variant="outlined" startIcon={<AddIcon />}>
          Delete
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Typography
          varient="h6"
          sx={{
            color: "white",
          }}
        >
          Arrivals
        </Typography>
        <Typography
          varient="h6"
          sx={{
            color: "white",
          }}
        >
          Departure
        </Typography>
      </Stack>

      <TableComponent />
    </Box>
  );
}

export default Feed;
