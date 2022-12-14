import React from "react";
import { render } from "@testing-library/react";
import BookListItem from "../BookListItem.jsx";
import BookList from "../BookList.jsx";

jest.mock("../BookListItem.jsx");

describe("Book List Tests", () => {
  beforeAll(() => {
    BookListItem.mockImplementation(() => <div>book list item component</div>);
  });
  const books = [
    {
      id: "1",
      title: "test title",
      author: "test author",
      description: "test description",
      releaseYear: 2018,
    },
    {
      id: "2",
      title: "test title",
      author: "test author",
      description: "test description",
      releaseYear: 2019,
    },
  ];

  it("should render booklist without error", () => {
    render(<BookList books={books} />);
    expect(BookListItem).toHaveBeenCalledTimes(2);
    expect(BookListItem).toHaveBeenCalledWith({ book: books[0] }, {});
    expect(BookListItem).toHaveBeenCalledWith({ book: books[1] }, {});
  });
});
