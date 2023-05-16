import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Index";
import "swiper/css";
import { FaSearch } from "react-icons/fa";
import { Mousewheel, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Listings.css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Show from "./Show/Inedx";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UpdateListing from "./ListingForm/UpdateListing";
import Card from "../Card";

const BASE_URL = "http://localhost:3000";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Listing = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleOpenUpdate = (listing) => {
    setSelectedListing(listing);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);

  const [listings, setListings] = useState([]);

  const [selectedListing, setSelectedListing] = useState(null);
  const sessionUser = JSON.parse(localStorage.getItem("current_user"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const response = await axios.get(`${BASE_URL}/listings`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        localStorage.setItem("listings", JSON.stringify(response.data));
        setListings(response.data);
      }
    };

    fetchListings();
  }, []);

  const handleListingClick = (listing) => {
    setSelectedListing(listing);
    handleOpen();
  };

  const handleSearch = async (term) => {
    const res = await axios(`${BASE_URL}/listings/search?q=${term}`);
    localStorage.setItem("searched_listings", JSON.stringify(res.data));
  };

  const handleNavigate = (e) => {
    e.preventDefault();

    handleSearch(e.target.value);
    navigate("/search");
  };

  const handleDelete = async (listing) => {
    await axios(`${BASE_URL}/listings/${listing?.id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("authorization"),
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          height: "300px",
          width: "100%",
          backgroundImage: `url("https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/ZG_ZPA_08_21_Americana_ExtFront_1081_4936px_desktopWebp2x-2-scaled.webp")`,
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "60px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Find it. Tour it. Own it.
          </h1>
          <div style={{ position: "relative", width: "50%" }}>
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city or zipcode"
              style={{
                fontSize: "18px",
                fontWeight: "400",
                height: "40px",

                position: "relative",
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleNavigate(e);
                }
              }}
            />
            <div style={{ position: "absolute", right: 1, top: 15 }}>
              <FaSearch size={25} />
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ margin: "30px 0 -100px 120px" }}>
        Current Listings in California
      </h1>
      <div style={{ marginBottom: "50px" }}>
        <Swiper
          modules={[Navigation, Mousewheel, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {listings &&
            listings?.map((listing) => (
              <SwiperSlide key={listing?.id}>
                <Card
                  listings={listings}
                  listing={listing}
                  handleListingClick={handleListingClick}
                  handleOpenUpdate={handleOpenUpdate}
                  handleDelete={handleDelete}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateListing
            style={{
              overflowY: "auto",
            }}
            handleClose={handleCloseUpdate}
            listing={selectedListing}
          ></UpdateListing>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Show listing={selectedListing}></Show>
        </Box>
      </Modal>
    </>
  );
};

export default Listing;
