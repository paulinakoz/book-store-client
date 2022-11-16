import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";
import { getBooksAction } from "../../../module/book/bookAction";
import { screen } from "@testing-library/react";

jest.mock("../BookList");
jest.mock("../../../module/book/bookAction");
describe("Book Container Tests", () => {
  beforeAll(() => {
    BookList.mockImplementation(() => <div>mock booklist component</div>);
  });

  it("should render without error", () => {
    const books = [
      {
        id: 1,
        title: "test title",
        description: "test description",
        releaseYear: 2018,
      },
    ];

    getBooksAction.mockImplementation(() => (dispatch) => {
      dispatch({
        type: "BOOKLIST",
        payload: books,
      });
      dispatch({ type: "BOOKLISTFULFILLED" });
    });
    renderWithRedux(<BookContainer />, {});

    expect(BookList).toHaveBeenCalledWith({ books }, {});
  });

  it("should show loader when isPending true", () => {
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLISTPENDING",
    }));

    renderWithRedux(<BookContainer />, {});
    expect(screen.getByTestId("book-loader")).toBeInTheDocument();
  });

  it("should show error message when error occurred is true", () => {
    getBooksAction.mockImplementation(() => ({
      type: "BOOKLISTERROR",
    }));

    renderWithRedux(<BookContainer />, {});
    expect(screen.getByTestId("book-error-message")).toBeInTheDocument();
  });
});
