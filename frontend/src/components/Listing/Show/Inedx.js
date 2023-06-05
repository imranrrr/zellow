import { FaHeart } from "react-icons/fa";
import {
  FaShare,
  FaDiscord,
  FaRegQuestionCircle,
  FaEllipsisH,
} from "react-icons/fa";
import Modal from "./Modal/index";
import "./Show.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import PropertyTabs from "./PropertyTabs";

const Show = ({ listing }) => {
  const sessionUser = JSON.parse(localStorage.getItem("current_user"));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "60%", boxSizing: "border-box", overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <img
          style={{ width: "100%", marginBottom: "4px" }}
          // src={
          //   (listing?.images && listing?.images[0]) ||
          //   "https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
          // }
          src={require('../../../assets/house.jpg')}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            maxHeight: "400px",
          }}
        >
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          <img src={require('../../../assets/house.jpg')} style={{ width: "49.8%", objectFit: "cover", marginBottom: "4px" }} />
          {/* {listing.images.slice(1).map((image) => (
            <img
              style={{ width: "100%", marginBottom: "10px" }}
              src={image}
            ></img>
          ))} */}
        </div>
      </div>
      <div style={{ width: "40%", paddingLeft: "1rem", paddingRight: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "40%" }}>
            <img
              width={130}
              height={35}
              src={"https://s.zillowstatic.com/pfs/static/z-logo-default.svg"}
              alt={listing?.address}
            />
          </div>
          <div className="favorite">
            <FavoriteBorderIcon
              htmlColor={listing?.favorite ? "red" : "gray"}
            />
            Save
          </div>
          <div className="favorite">
            <FaShare color={listing?.favorite ? "red" : "#55acfe"} /> Share
          </div>
          <div className="favorite">
            <FaRegQuestionCircle
              color={listing?.favorite ? "red" : "#55acfe"}
            />{" "}
            Hide
          </div>
          <div className="favorite">
            <FaEllipsisH color={listing?.favorite ? "red" : "#55acfe"} /> More
          </div>
        </div>
        <hr />
        <div>
          <span style={{ fontSize: "50px", fontWeight: "bold" }}>
            ${Math.floor(listing?.home_price).toLocaleString()}
          </span>
          <span
            style={{
              marginLeft: "20px",
              position: "relative",
              bottom: "0.7rem",
            }}
          >
            {listing?.bedrooms} bds | {listing?.bathrooms} ba |{" "}
            {listing?.listingSize} sqft | {listing?.marketStatus}
          </span>
          <p>
            <strong>Address:</strong> {listing?.address}, {listing?.city},{" "}
            {listing?.state}, {listing?.zipCode}
          </p>
          <div className="Saleing__container">
            <div className="Saleing__container__list" />

            <div className="Saleing__container__list__paragraph">
              {listing?.home_type} <strong> For Sale </strong>
              <p className="Saleing__container__list__paragraph__border"></p>
              <p className="Saleing__container__list__paragraph__border__dashed">
                Zestimate®:
              </p>
              <strong style={{ marginLeft: "0.3rem" }}>$1,417,404</strong>
            </div>
          </div>
          <div className="payment__container">
            <p style={{ display: "flex" }}>
              <strong> Est. payment:</strong> $8,524/mo{" "}
              <p style={{ position: "relative", bottom: "0.3rem" }}> ⓘ</p>
            </p>
            <div className="payment__container">
              <div className="payment__container__dollar__sign">
                <p className="payment__container__dollar__sign__text">$</p>
              </div>
              <div style={{ marginLeft: "1rem", color: "#0068fc" }}>
                <strong>Get Pre-qualified</strong>
              </div>
            </div>
          </div>
          <p>{listing?.home_overview}</p>
        </div>
        <div className="button__container">
          <div>
                      </div>
          <div className="button__container__contact__agent">
            {sessionUser && sessionUser.id != listing.user_id && <Modal listing={listing} />}

            <Button className="button__container__contact__agent__contactButton" variant="outlined" >Contact agent</Button>
          </div>
        </div>
        <div className="tabs">
          <PropertyTabs />
        </div>
        {/* <div className="form__border__container"></div> */}
      </div>
    </div>
  );
};

export default Show;
