import React from 'react'
import smallCardTeam from '../../assets/teamSmallCard.svg'

export const TeamSmallCard:React.FC = () => {
  return (
    // Team card
    <>
     
      <button className="small__card-container">
        <div className="small__card-top">
          <img src={smallCardTeam} alt="img" />
        </div>
        <div className="small__card-bot">
          <div className="small__card-deskription">
            <h4>Portland trail blazers</h4>
            <p className='small__card-p'>Year of foundation: 1970</p>
          </div>
        </div>
      </button>
      
    </>
    // Team card
  )
}
