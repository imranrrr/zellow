import List from "../Listing/List/Index";
import { useEffect, useState } from "react";
import Header from "../Header/Index";
import axios from "axios";
import { BASE_URL } from "../../helper/variable";

const Favorite = () => {
  const [favorites, setFavorites] = useState([
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
    {
      iamges: [],
      address: "New York",
      home_price: 20000,
      bedrooms: 4,
      listingSize: 2,
      marketStatus: "Active",
      address: "New york",
      city: "New York",
      state: "WD",
      zipCode: "222222",
      user_id: 1,
    },
  ]);
  // useEffect(() => {
  //   const fetchListings = async () => {
  //     const response = await axios.get(`${BASE_URL}/favorites`, {
  //       headers: {
  //         Authorization: localStorage.getItem("authorization"),
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (response.status === 200) {
  //       localStorage.setItem("listings", JSON.stringify(response.data));
  //       setFavorites(response.data);
  //     }
  //   };

  //   fetchListings();
  // }, []);

  return (
    <>
      <Header />
      <List listings={favorites} />
    </>
  );
};
export default Favorite;
