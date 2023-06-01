import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
import { Mousewheel, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { borderRadius } from "@mui/system";
import { Checkbox } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 375,
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "scroll",
  height: 520,
  overflowX: "hidden",
  borderRadius: 2,
};

export default function TourRequestModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{
          marginTop: "1rem",
          width: "87%",
          marginLeft: "1rem",
          fontSize: "bold",
        }}
      >
        Request this time
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="tour__request__container">
            <div className="tour__request__container__top">
              <div className="tour__request__container__top__title">
                <span>Tour with a Buyer's Agent</span>
              </div>
              <div className="tour__request__container__top__Icon">
                {" "}
                <CloseIcon onClick={handleClose} />
              </div>
            </div>
            <div className="tour__request__container__border">
              <hr />
            </div>
            <div className="tour__request__container__preferredtime__title">
              <p>Saturday, May 27 at 11:00 am</p>
            </div>
            <span className="tour__request__container__preferredtime__anchortag">
              Edit
            </span>
            <div className="tour__request__container__namefield">
              <label>Name</label>
              <input />
            </div>
            <div className="tour__request__container__emailfield">
              <label>Phone</label>
              <input />
            </div>
            <div className="tour__request__container__emailfield">
              <label>Email</label>
              <input />
            </div>
            <div className="tour__request__container__emailfield">
              <label>Message</label>
              <textarea placeholder="I am interested in 1608 5th St, Tillamook, OR 97141." />
            </div>
            <div className="tour__request__container__tourbutton">
              <button>Request tour</button>
            </div>
            <div style={{ display: "flex" }}>
              <div className="tour__request__container__checkbox">
                <Checkbox />
              </div>
              <div className="tour__request__containe__checkbox__text">
                <p>I want financing information</p>
              </div>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "gray",
                marginLeft: "1rem",
                textAlign: "justify",
                width: "90%",
              }}
            >
              <p>
                By pressing Request tour, you agree that Zillow Group and its
                affiliates, and real estate professionals may call/text you
                about your inquiry, which may involve use of automated means and
                prerecorded/artificial voices. You don't need to consent as a
                condition of buying any property, goods or services.
                Message/data rates may apply. You also agree to our Terms of
                Use. Zillow does not endorse any real estate professionals. We
                may share information about your recent and future site activity
                with your agent to help them understand what you're looking for
                in a home.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
