import React from 'react'

const PriceTaxHistory = () => {
  return (
    <div className='priceTaxHistory'>
      <h4 className='priceTaxHistory__heading'>Price and tax history</h4>
      <div className='priceTaxHistory__price'>
        <h5>Price history</h5>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Even</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6/1/23</td>
              <td>Listed for sale</td>
              <td>$289,300 <span>-3.5%</span> <br /> $193/sqft</td>
            </tr>
            <tr>
              <td>6/1/23</td>
              <td>Listed for sale</td>
              <td>$289,300 <span>-3.5%</span> <br /> $193/sqft</td>
            </tr>
            <tr>
              <td>6/1/23</td>
              <td>Listed for sale</td>
              <td>$289,300 <span>-3.5%</span> <br /> $193/sqft</td>
            </tr>
            <tr>
              <td>6/1/23</td>
              <td>Listed for sale</td>
              <td>$289,300 <span>-3.5%</span> <br /> $193/sqft</td>
            </tr>
          </tbody>
        </table>
      </div >
    </div >
  )
}

export default PriceTaxHistory