import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from "../bookReducer";

describe("Book Reducer Tests", () => {
  it("should return the right new state", () => {
    const action = {
      type: "BOOKLIST",
      payload: [
        {
          id: 1,
          title: "test title",
          description: "test description",
          releaseYear: 2018,
        },
      ],
    };

    const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

    expect(newState).toEqual({
      books: [
        {
          id: 1,
          title: "test title",
          description: "test description",
          releaseYear: 2018,
        },
      ],
      promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOccured: false,
      },
    });
  });
});
