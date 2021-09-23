import React from 'react'
import { Add_button } from '../../Components/Buttons/Add_button/Add_button'
import { Header } from '../../Components/header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'
import { PlayerSmallCard } from '../../Components/PlayerSmallCard/PlayerSmallCard'
import { Search } from '../../Components/Search/Search'




export const Card_players: React.FC = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <div className="card_players-container">
        <div className="upContainer-players">
          <Search/>
          <Add_button/>
        </div>
        <div className="mainContainer-players">
          <PlayerSmallCard/>
          <PlayerSmallCard/>
          <PlayerSmallCard/>
          <PlayerSmallCard/>
          <PlayerSmallCard/>
          <PlayerSmallCard/>
          
          
        </div>
      </div>
    </>
  )
}
