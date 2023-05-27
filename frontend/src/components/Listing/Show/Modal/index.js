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
import TourRequestModal from "./TourRequestModal/index"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 365,
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "scroll",
  height: 520,
  overflowX: "hidden",
  borderRadius: 2,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button style={{ width: "18rem", height: "3.9rem" }} onClick={handleOpen}>
        <strong>Request a tour</strong> <p>as early as today at 4:00</p>
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
            <div className="tour__request__container__tabs__container">
              <div className="tour__request__container__tabs__container__persontab">
                <div className="tour__request__container__tabs__container__persontab__title">
                  <p>In-person</p>
                </div>
              </div>
              <div className="tour__request__container__tabs__container__videotab">
                <div className="tour__request__container__tabs__container__videotab__title">
                  <p>video chat</p>
                </div>
              </div>
            </div>
            <div className="tour__request__container__preferredtime__title">
              <p>Select a preferred time</p>
            </div>

            <div
              style={{
                display: "flex",
                width: "320px",
                justifyContent: "space-between",
                position: "relative",
                top: "0.5rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  left: "0.4rem",
                  top: "2rem",
                  color: "lightgrey",
                }}
              >
                <ArrowBackIosIcon />
              </div>
              <div className="tour__request__container__border__container">
                <div className="tour__request__container__border__container__subcontainer">
                  <div className="tour__request__container__border__container__subcontainer__days">
                    <p>FRI</p>
                  </div>
                  <div className="tour__request__container__border__container__subcontainer__dates">
                    <p>May 26</p>
                  </div>
                </div>
              </div>
              <div className="tour__request__container__border__container__second">
                <div className="tour__request__container__border__container__subcontainer">
                  <div className="tour__request__container__border__container__subcontainer__days">
                    <p>SAT</p>
                  </div>
                  <div className="tour__request__container__border__container__subcontainer__dates">
                    <p>May 27</p>
                  </div>
                </div>
              </div>
              <div className="tour__request__container__border__container__third">
                <div className="tour__request__container__border__container__subcontainer">
                  <div className="tour__request__container__border__container__subcontainer__days">
                    <p>SUN</p>
                  </div>
                  <div className="tour__request__container__border__container__subcontainer__dates">
                    <p>May 28</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  left: "1.8rem",
                  top: "2rem",
                  color: "#0d7ee8",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="tour__request__container__selectfield">
              <select>
                <option selected="">11:00 am</option>
                <option selected="">01:00 am</option>
                <option selected="">02:00 am</option>
                <option selected="">03:00 am</option>
              </select>
            </div>
            <div className="tour__request__container__tourbutton">
             <TourRequestModal/>
            </div>
            <div className="tour__request__container__image">
              <img src="https://photos.zillowstatic.com/fp/9f4f9b85918fb3e791e1fc75e0c8a804-cc_ft_768.webp" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
