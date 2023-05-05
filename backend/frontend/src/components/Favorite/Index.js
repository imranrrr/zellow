import List from "../Listing/List/Index";
import { useEffect, useState } from "react";
import Header from "../Header/Index";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchListings = async () => {
      const response = await axios.get(`${BASE_URL}/favorites`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        localStorage.setItem("listings", JSON.stringify(response.data));
        setFavorites(response.data);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <Header />
      <List listings={favorites} />
    </>
  );
};
export default Favorite;
