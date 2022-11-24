import React from "react";
import { render, screen } from "@testing-library/react";
import BookListItem from "../BookListItem.jsx";

describe("Book List Item Tests", () => {
  it("should render book list item without error", () => {
    const book = {
      id: "1",
      title: "test title",
      author: "test author",
      description: "test description",
      releaseYear: 2018,
    };
    render(<BookListItem book={book} />);

    expect(screen.getAllByText("test title")[0]).toBeInTheDocument();
    expect(screen.getByText("test description")).toBeInTheDocument();
    expect(screen.getByText("test author")).toBeInTheDocument();
    expect(screen.getByText("2018")).toBeInTheDocument();
  });
});
