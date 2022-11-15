import axios from "axios";
import baseUrl from "../../config/index.js";

const getBooksService = () => axios.get(`${baseUrl}/api/v1/books`);

export default getBooksService;
