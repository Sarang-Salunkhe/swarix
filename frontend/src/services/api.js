import axios from "axios";

export const searchSongs = async (query) => {
  const res = await axios.get(`http://127.0.0.1:8000/api/search/?q=${query}`);
  return res.data;
};