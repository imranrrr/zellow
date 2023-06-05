import React from 'react'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { Button } from '@mui/material';

const DownPayment = () => {
  return (
    <div className='downPayment'>
      <h4 className='downPayment__heading'>Down payment assistance</h4>
      <div className='downPayment__assist'>
        <div className='downPayment__assist__desc'>
          <CalculateOutlinedIcon style={{ fontSize: "2.5rem", color: "#0D4599" }} />
          <p>
            <b>14 programs</b>
            may be available to provide you with
            <b> up to $100,000</b>
            in <span>down payment assistance</span>, depending on your specific information.
          </p>
        </div>
        <Button className='downPayment__assist__enterInfoButton' variant='outlined'>Enter your information</Button>
      </div>
    </div>
  )
}

export default DownPayment