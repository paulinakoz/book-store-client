import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../module/book/bookAction";
import { getBooksSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import BookList from "./BookList";

const BookContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  const books = useSelector(getBooksSelector);
  console.log(books);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
    >
      <BookFilter />
      <Box sx={{ width: "80%" }}>
        <BookList books={books} />
      </Box>
    </Box>
  );
};

export default BookContainer;
