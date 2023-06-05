import React from 'react'

const NearbySchools = () => {
  return (
    <div className='nearbySchools'>
      <h4 className='nearbySchools__heading'>Nearby Schools in Tillamook</h4>
      <h5 className='nearbySchools__heading2'>Schools provided by the listing agent</h5>
      <div className='nearbySchools__schools'>
        <div className='nearbySchools__schools__school'>
          <p>Elementary:</p>
          <span>Liberty, South Prairie</span>
        </div>
        <div className='nearbySchools__schools__school'>
          <p>Middle:</p>
          <span>Tillamook</span>
        </div>
        <div className='nearbySchools__schools__school'>
          <p>High:</p>
          <span>Tillamook</span>
        </div>
      </div>
    </div>
  )
}

export default NearbySchools