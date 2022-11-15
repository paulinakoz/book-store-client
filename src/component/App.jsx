import React from "react";
import axios from "axios";
import baseUrl from "../config/index.js";
import Layout from "./layout/Layout.jsx";
import BookContainer from "./book/BookContainer.jsx";

function App() {
  axios(`${baseUrl}/api/v1/books`).then((books) => {
    console.log(books);
  });

  return (
    <Layout>
      <BookContainer />
    </Layout>
  );
}

export default App;
