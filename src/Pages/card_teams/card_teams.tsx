/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Add_button } from '../../Components/Buttons/Add_button/Add_button'
import { Header } from '../../Components/header/Header'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Search } from '../../Components/Search/Search'
import { TeamSmallCard } from '../../Components/TeamSmallCard/TeamSmallCard'



export const Card_teams: React.FC = () => {
  return (
    <>
      <div className="bg">
        <Header/>
        <Navbar/>
        <div className="card_teams-container">
          <div className="upContainer">
            <Search/>
            <Add_button/>
          </div>
          <div className="mainContainer">
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
            
            
          </div>
        </div>
      </div>
    </>
  )
}
