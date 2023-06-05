import React from 'react'
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';

const LocalLegalProtections = () => {
  return (
    <div className='localLegalProtections'>
      <h4 className='localLegalProtections__heading'>
        Local Legal Protections
      </h4>
      <div className='localLegalProtections__desc'>
        <BalanceRoundedIcon style={{ fontSize: "2.5rem", color: "0D4599" }} />
        <p>Are there legal protections for the LGBTQ community at the state level in Oregon?</p>
      </div>
    </div>
  )
}

export default LocalLegalProtections