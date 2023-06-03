import { Button } from "@mui/base";
import axios from "axios";
import { useState } from "react";
import "./Card.css";
import { BASE_URL } from "../../helper/variable";
import { FaHeart, FaTrash, FaEdit } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card = ({
  listings,
  listing,
  handleListingClick,
  handleOpenUpdate,
  handleDelete,
}) => {
  const sessionUser = JSON.parse(localStorage.getItem("current_user"));
  const [isFavourite, setIsFavourite] = useState(listing.favorite);
  const [load, setLoad] = useState(false);

  const addFavorite = async (listing) => {
    const reqData = new FormData();
    reqData.append("favorite[listing_id]", listing?.id);

    axios(`${BASE_URL}/favorites`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("authorization"),
        "Content-Type": "application/json",
      },
      data: reqData,
    }).then((res) => {
      const res1 = listings?.find((list) => list.id === listing.id);
      if (res1) res1.favorite = !res1.favorite;

      setIsFavourite(listing.favorite);
    });
  };

  const deleteFavorite = async (listing) => {
    const reqData = new FormData();
    reqData.append("favorite[listing_id]", listing?.id);
    const response = await axios(`${BASE_URL}/favorites/${listing?.id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("authorization"),
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const res1 = listings?.find((list) => list.id === listing.id);
      if (res1) res1.favorite = !res1.favorite;

      setIsFavourite(listing.favorite);
    });
  };

  const handleFavorite = (listing) => {
    if (sessionUser) {
      if (!listing?.favorite) addFavorite(listing);
      else {
        deleteFavorite(listing);
      }
      setLoad(!load);
    } else {
      alert("Please login to add into favorite");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div>
          <img
            className="image"
            src={
              (listing?.images && listing?.images[0]) ||
              "https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            }
            alt={listing?.address}
          />
        </div>
        <div className="favorite" onClick={() => handleFavorite(listing)}>
          < FavoriteBorderIcon  htmlColor={isFavourite ? "red" : "gray"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="card-body"
            onClick={() => handleListingClick(listing)}
          >
            <h3>${Math.floor(listing?.home_price).toLocaleString()}/mo</h3>
            <p className="card-body-info">
              {listing?.bedrooms} bds | {listing?.bathrooms} ba |{" "}
              {listing?.listingSize} sqft | {listing?.marketStatus}
            </p>
            <p>
              {listing?.address}, {listing?.city}, {listing?.state},{" "}
              {listing?.zipCode}
            </p>
          </div>
          {sessionUser?.id === listing.user_id ? (
            <div>
              <FaEdit
                onClick={() => handleOpenUpdate(listing)}
                style={{ color: "blue", margin: "5px" }}
                size={20}
              />
              <FaTrash
                onClick={() => handleDelete(listing)}
                style={{ color: "red", margin: "5px" }}
                size={20}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
