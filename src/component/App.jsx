import React from "react";
import axios from "axios";
import baseUrl from "../config/index.js";
import Layout from "./layout/Layout.jsx";

function App() {
  axios(`${baseUrl}/api/v1/books`).then((books) => {
    console.log(books);
  });

  return(
    <Layout>
      <div>My first component update</div>
    </Layout>
  );
}

export default App;
