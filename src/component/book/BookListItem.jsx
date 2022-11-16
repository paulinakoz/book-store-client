import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Avatar, Typography } from "@mui/material";

const propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};

const BookListItem = ({ book }) => {
  return (
    <Box mb={2}>
      <Paper
        elevation={2}
        sx={{ padding: "10px", display: "flex", width: "80%" }}
      >
        <Avatar sx={{ width: "180px", height: "200px" }} variant="square">
          {book.title}
        </Avatar>
        <Box ml={2}>
          <Typography variant="h5">{book.title}</Typography>
          <Typography>{book.description}</Typography>
          <Typography>{book.releaseYear}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

BookListItem.propTypes = propTypes;
export default BookListItem;
