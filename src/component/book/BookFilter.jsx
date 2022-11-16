import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { getBooksByTitle } from "../../module/book/bookAction";

const BookFilter = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(getBooksByTitle(searchText));
  };

  return (
    <Box sx={{ width: "20%", height: "500px" }}>
      <Paper sx={{ width: "100%", height: "100%", textAlign: "center" }}>
        <Typography>Search Books</Typography>
        <Box paddingTop={3} marginBottom={2}>
          <TextField
            placeholder="Enter book title"
            id="book-search"
            data-testid="book-title-input"
            label="Enter book title"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Box>
        <Button onClick={handleSearchClick} variant="contained" color="primary">
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default BookFilter;
