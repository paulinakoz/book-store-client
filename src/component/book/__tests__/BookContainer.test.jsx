import React from "react";
import renderWithRedux from "../../../util/testUtil";
import { screen } from "@testing-library/react";
import BookContainer from "../BookContainer";

describe("Book Container Tests", () => {
  it("should render without error", () => {
    renderWithRedux(<BookContainer />, {
      initialState: {
        bookReducer: {
          books: [
            {
              id: 1,
              title: "test title",
              description: "test description",
              releaseYear: 2018,
            },
          ],
        },
      },
    });

    expect(screen.getByText("Display all books.")).toBeInTheDocument();
  });
});
