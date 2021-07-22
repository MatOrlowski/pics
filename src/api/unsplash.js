import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Q9f0CG5zGN8WKQi6XQZDzCTv33_MGHwZmBrSc85xB_0",
  },
});
