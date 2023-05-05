import { FaHeart } from "react-icons/fa";

const Show = ({ listing }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "60px",
      }}
    >
      <div style={{ width: "50%", boxSizing: "border-box", overflowY: "auto" }}>
        <img style={{ width: "100%" }} src={listing.images[0]}></img>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            maxHeight: "400px",
            marginTop: "10px",
          }}
        >
          {listing.images.slice(1).map((image) => (
            <img
              style={{ width: "100%", marginBottom: "10px" }}
              src={image}
            ></img>
          ))}
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width={100}
            height={35}
            src={"https://s.zillowstatic.com/pfs/static/z-logo-default.svg"}
            alt={listing?.address}
          />
          <div className="favorite">
            <FaHeart color={listing?.favorite ? "red" : "gray"} /> Save
          </div>
        </div>
        <hr />
        <div style={{ marginLeft: "40px", marginTop: "60px" }}>
          <span style={{ fontSize: "50px", fontWeight: "bold" }}>
            ${Math.floor(listing?.home_price).toLocaleString()}
          </span>
          <span style={{ marginLeft: "20px", marginTop: "60px" }}>
            {listing?.bedrooms} bds | {listing?.bathrooms} ba |{" "}
            {listing?.listingSize} sqft | {listing?.marketStatus}
          </span>
          <p>
            <strong>Address:</strong> {listing?.address}, {listing?.city},{" "}
            {listing?.state}, {listing?.zipCode}
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                marginRight: "10px",
                borderRadius: "50%",
                height: "15px",
                width: "15px",
                backgroundColor: "red",
              }}
            />
            <p>{listing?.home_type}</p>
          </div>
          <p>
            {" "}
            <strong> Est. payment:</strong> ${listing?.rent_estimate}/mo
          </p>
          <p>{listing?.home_overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Show;
