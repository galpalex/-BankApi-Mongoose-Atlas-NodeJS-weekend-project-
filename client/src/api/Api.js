import axios from "axios";

let myUrl = "http://localhost:5000/bank-api/"; //development

if (process.env.NODE_ENV === "production") {
  myUrl = "bank-api";
}
export default axios.create({
  baseURL: myUrl,
});
