import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import renderWithRedux from "../../../util/testUtil";
import BookFilter from "../BookFilter";
import { getBooksByTitle } from "../../../module/book/bookAction";

jest.mock("../../../module/book/bookAction");
describe("Book Filter Tests", () => {
  it("should fire getBooksByTitle action when search button clicked", () => {
    renderWithRedux(<BookFilter />, {});
    getBooksByTitle.mockImplementation(() => (dispatch) => {});

    const textField = screen.getByLabelText("Enter book title");
    fireEvent.change(textField, { target: { value: "test title" } });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    expect(getBooksByTitle).toHaveBeenCalledWith("test title");
  });
});
