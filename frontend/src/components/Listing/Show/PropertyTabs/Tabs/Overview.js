import React, { useState } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
const Overview = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (showMore === false) {
      setShowMore(true)
    }
    else {
      setShowMore(false);
    }
  }

  return (
    <div className='overview'>
      <div className='overview__container'>
        <div className='overview__container__points'>
          <ApartmentIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>Residential, Single family residence</span>
        </div>
        <div className='overview__container__points'>
          <CalendarMonthIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>Built in 1900</span>
        </div>
        <div className='overview__container__points'>
          <DeviceThermostatIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>Ductless, heat pump</span>
        </div>
        <div className='overview__container__points'>
          <AcUnitIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>Heat pump</span>
        </div>
        <div className='overview__container__points'>
          <LocalParkingIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>1 Attached garage space</span>
        </div>
        <div className='overview__container__points'>
          <SquareFootIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>4,456 sqft</span>
        </div>
        <div className='overview__container__points'>
          <MonetizationOnOutlinedIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>$193 price/sqft</span>
        </div>
        <div className='overview__container__points'>
          <MonetizationOnOutlinedIcon style={{ color: "#0D4599", marginRight: "1rem", }} />
          <span>2.25% buyers agency fee</span>
        </div>
      </div>
      <div className='overview__details'>
        <h4 className='overview__details__heading'>Overview</h4>
        <div className='overview__details__badges'>
          <p>Corner lot</p>
          <p>Covered patio</p>
          <p>Corner lot</p>
          <p>Covered patio</p>
          <p>Corner lot</p>
          <p>Covered patio</p>
          <p>Corner lot</p>
          <p>Covered patio</p>
        </div>
        <div className='overview__details__desc'>
          <p>MOTIVATED SELLER for Charming + corner lot!  3 Bedroom, 1 Bathroom, 1447 square foot home in the heart of Tillamook. Teeming with character & potential, this house is conveniently located on a 4356 sq ft lot & features an</p>
          {showMore === false ?
            <span onClick={handleShowMore}>Show more</span>
            :
            <>
              <p>attached one car garage, a covered patio, high interior ceilings, a heat pump for efficiency & easy to care for yard. There is an additional room off of the living room that would make a great office or 4th bedroom.  Lock in this unique opportunity to enjoy everything Tillamook.Furnishings are negotiable.</p>
              <span onClick={handleShowMore}>Hide</span>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Overview