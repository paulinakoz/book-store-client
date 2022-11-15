import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import mockAxios from "jest-mock-axios";
import getBooksAction from "../bookAction";

jest.mock("axios");
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("Book Actions Tests", () => {
  it("should be able to dispatch action successfully", async () => {
    const store = mockStore({});

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: "test title",
            description: "test description",
            releaseYear: 2018,
          },
        ],
      })
    );

    await store.dispatch(getBooksAction());
    const actions = store.getActions();

    expect(actions.length).toEqual(3);
    expect(actions[1]).toEqual({
      type: "BOOKLIST",
      payload: [
        {
          id: 1,
          title: "test title",
          description: "test description",
          releaseYear: 2018,
        },
      ],
    });
  });
});
