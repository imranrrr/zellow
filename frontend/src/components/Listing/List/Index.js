import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://localhost:3000";

const List = ({ listings }) => {
  const sessionUser = localStorage.getItem("current_user");
  const [load, setLoad] = useState(false);
  const addFavorite = async (listing) => {
    const reqData = new FormData();
    reqData.append("favorite[listing_id]", listing?.id);
    const response = await axios(`${BASE_URL}/favorites`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("authorization"),
        "Content-Type": "application/json",
      },
      data: reqData,
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

  const handleListingClick = (listing) => {};
  return (
    <>
      {listings.map((listing) => (
        <div
          key={listing.id}
          style={{
            width: "30%",
            margin: "20px",
            padding: "10px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            boxShadow: "0 0 10px 0 lightgray",
          }}
        >
          <img
            className="image"
            src={
              (listing?.image_urls && listing?.image_urls[0]) ||
              "https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            }
            alt={listing?.address}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          {/* <div className="favorite" onClick={() => handleFavorite(listing)}>
                <FaHeart color={listing?.favorite ? "red" : "gray"} />
              </div> */}
          <div
            className="card-body"
            onClick={() => handleListingClick(listing)}
            style={{ marginTop: "10px" }}
          >
            <h3 style={{ margin: "0", marginBottom: "5px" }}>
              ${Math.floor(listing?.home_price).toLocaleString()}
            </h3>
            <p
              style={{
                margin: "0",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              {listing?.bedrooms} bds | {listing?.bathrooms} ba |{" "}
              {listing?.listingSize} sqft | {listing?.marketStatus}
            </p>
            <p
              style={{
                margin: "0",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              {listing?.address} | {listing?.city} | {listing?.state} |{" "}
              {listing?.zipCode}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default List;
