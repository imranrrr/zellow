import React from 'react'
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
const Neighborhood = () => {
  return (
    <div className='neighborhood'>
      <h4 className='neighborhood__heading'>Neighborhood:97141</h4>
      <div className='neighborhood__details'>
        <div className='neighborhood__details__desc'>
          <DirectionsRunOutlinedIcon style={{ color: "0D4599", fontSize: "2.5rem" }} />
          <div className='neighborhood__details__desc__text'>
            <b>Walk Score</b>
            <p><span>77</span> / 100 (Very Walkable)</p>
          </div>
        </div>
        <div className='neighborhood__details__desc'>
          <DirectionsRunOutlinedIcon style={{ color: "0D4599", fontSize: "2.5rem" }} />
          <div className='neighborhood__details__desc__text'>
            <b>Walk Score</b>
            <p><span>77</span> / 100 (Very Walkable)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Neighborhood