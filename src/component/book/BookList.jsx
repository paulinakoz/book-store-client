import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import BookListItem from "./BookListItem";

const propTypes = {
  books: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};

const BookList = ({ books }) => {
  return (
    <Box sx={{}} ml={5}>
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </Box>
  );
};

BookList.propTypes = propTypes;
export default BookList;
