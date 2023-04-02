import axios from "axios";

import { apiConfig } from "@/config";

const API = axios.create({
  baseURL: apiConfig.baseUrl,
});

export { API };
