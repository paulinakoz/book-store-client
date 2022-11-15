import React from "react";
import Proptypes from "prop-types";
import { Box } from "@mui/material";

const propTypes = {
  books: Proptypes.arrayOf({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    releaseYear: Proptypes.number.isRequired,
  }).isRequired,
};

const BookList = ({ books }) => {
  return (
    <Box sx={{}}>
      {books.map((book) => (
        <div key={book.id}>{book.id}</div>
      ))}
    </Box>
  );
};

BookList.propTypes = propTypes;
export default BookList;
