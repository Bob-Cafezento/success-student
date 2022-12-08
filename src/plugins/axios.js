import axios from "axios";

axios.defaults.baseURL = "https://successstudent.pythonanywhere.com/";

axios.defaults.headers.common["Content-Type"] = "application/json";
