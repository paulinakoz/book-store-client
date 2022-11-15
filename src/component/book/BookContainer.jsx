import { Box } from "@mui/system";
import React from "react";
import BookFilter from "./BookFilter";

const BookContainer = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
    >
      <BookFilter />
      <Box sx={{ width: "80%" }}>Display all books.</Box>
    </Box>
  );
};

export default BookContainer;
