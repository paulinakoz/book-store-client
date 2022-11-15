import getBookService from "./bookService.js";

const getBooksAction = () => async (dispatch) => {
  try {
    const books = await getBookService();
    dispatch({
      type: "BOOKLIST",
      payload: books.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getBooksAction;
