import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../module/book/bookAction";
import {
  getBooksSelector,
  getBookPromiseSelector,
} from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import BookList from "./BookList";

const BookContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  const books = useSelector(getBooksSelector);
  const bookPromise = useSelector(getBookPromiseSelector);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
    >
      <BookFilter />
      <Box sx={{ width: "80%" }}>
        {bookPromise.isPending && (
          <Box ml={5}>
            <Skeleton
              data-testid="book-loader"
              variant="react"
              animation="pulse"
              width="80%"
              height={200}
            />
          </Box>
        )}
        {bookPromise.isErrorOccured && (
          <div data-testid="book-error-message">Error message</div>
        )}
        {bookPromise.isFulfilled && <BookList books={books} />}
      </Box>
    </Box>
  );
};

export default BookContainer;
