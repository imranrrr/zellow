import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Box, Modal, Select, MenuItem } from "@mui/material";
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
import TourRequestModal from "./TourRequestModal/index";


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

const timeVariable = ['11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '12:00 am', '1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am']

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [requestForm, setRequestForm] = useState({})
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
                height: "140px",
              }}
              className="tour"
            >
              <Swiper
                modules={[Navigation, Mousewheel, Scrollbar, A11y]}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide key={1}>
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
                </SwiperSlide>
                
              </Swiper>
            </div>
            <div className="tour__request__container__selectfield">
            <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={() => console.log("jndc")}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
            </div>
            <div className="tour__request__container__tourbutton">
              <TourRequestModal />
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
